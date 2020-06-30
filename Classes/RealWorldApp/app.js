import { MOCK } from "./MOCK_DATA.js";

// ДомЕлемент клас, целта на този клас е да ни даде абстракция на ниво система. Не е важно дали работим
// в уеб браузър или на бекенда. Тази абстракция ни позволява да енкапсулираме цялата логика по това
// какво означава да си ДОМ елемент.
class DomElement {
  // тук използваме долно тире за да анонсираме, че това са частни полета
  // правилният синтаксис в JS е с #
  // VSCode не харесва този синтаксис към момента и започва да се държи странно
  _tag;
  _content;

  // статично поле е такова, което не се инстанцира заедно с класа
  // тези полета се достъпват чрез ClassName.staticMemberName
  static _domFactory;

  // Конструктор функцията отговорна за сетъпа на обекта, който
  // ще бъде инстанцията на класа
  constructor(tag, content) {
    this._tag = tag;
    this._content = content;
  }

  // Статични гетер и сетер аналогично на статичното поле с тази разлика, че са функции.
  // Използваме ги, за да дадем стойност на _domFactory, и за да можем да я достъпим после.
  static get domFactory() {
    return DomElement._domFactory;
  }
  static set domFactory(x) {
    DomElement._domFactory = x;
  }

  // Този метод абстрахира самото използване на статичния метод.
  // Това може да е полезно в много ситуации в които ни е налага да презапишем,
  // някой от методите на класа, които имат нужда от генериране на елемент.
  // В нашият случай това е само render() метода.
  generateDomElement() {
    // Както сме написали по-горе: статичните методи и свойства се достъпват,
    // през името на класа. Те не съществуват на ниво инстанция -> this
    return DomElement.domFactory(this._tag);
  }

  // Най-сложният ни метод до момента...
  // Отговаря за това как трябва да се рендира елемента.
  // В един идеален свят, това ще са няколко метода, които да се занимават с
  // различните начини за рендира, а този само ще насочва, кой да се извика.
  // Това ще ни позволи да правим по-малко и по-гранулирани презаписвания на методи.
  render() {
    const elementInstance = this.generateDomElement();
    if (Array.isArray(this._content)) {
      this._content.forEach(x => {
        // това че тези проверки се поватарят е "code smell" - google it
        // тъй като са 100% еднакви с тези от долу, трябва да се извадят
        // в един или повече методи и да се параметризират.
        if (x instanceof DomElement) {
          elementInstance.appendChild(x.render());
        } else if (x instanceof HTMLElement) {
          elementInstance.appendChild(x);
        } else {
          elementInstance.innerHTML = x.toString();
        }
      });
    } else {
      if (this._content instanceof DomElement) {
        elementInstance.appendChild(this._content.render());
      } else if (this._content instanceof HTMLElement) {
        elementInstance.appendChild(this._content);
      } else {
        elementInstance.innerHTML = this._content.toString();
      }
    }
    return elementInstance;
  }
}

// Тази група елементи, трябва да бъдат обединени в собствено именовано пространство (namespace)
// Те не трябва да са глобално достъпни освен чрез фабриката, която направихме по долу.
class DomTable extends DomElement {
  constructor(content) {
    super("table", content);
  }
}
class DomThead extends DomElement {
  constructor(content) {
    super("thead", content);
  }
}
class DomTbody extends DomElement {
  constructor(content) {
    super("tbody", content);
  }
}
class DomTr extends DomElement {
  constructor(content) {
    super("tr", content);
  }
}
class DomTd extends DomElement {
  constructor(content) {
    super("td", content);
  }
}
class DomTh extends DomElement {
  constructor(content) {
    super("th", content);
  }
}

// Това е специален случай на елементите. Неговото съдържание, трябва да бъде от тип DomLi.
// Това обаче не е логично да се контролира от друг клас. Т.е. знанието за това, че всеки ред
// в UL трябва да е LI трябва да си остане енкапсулирано тук. LI елемента е безполезен извън
// контекста на подреден или неподреден списък.
class DomUl extends DomElement {
  constructor(content) {
    // Обърнете внимание, че не презаписваме рендер метода, а "декорираме" съдържанието още
    // в конструктора. Това може да се бъде от полза в някои ситуации и в ущърб в други.
    // Полза: промяна в начина на рендиране на ДомЕлемент няма да доведе до регресия на този клас.
    // Вреда: промяна в начина на запазване на съдържанието и обновяване на състоянието му, могат
    // да предизвикат регресия на този клас.
    super(
      "ul",
      content
        .reduce(
          (aggregate, element) => [
            ...aggregate,
            Object.values(element).join(" ")
          ],
          []
        )
        .map(x => new DomLi(x))
    );
  }
}
class DomLi extends DomElement {
  constructor(content) {
    super("li", content);
  }
}

// Първи частен случай на рендер метода в този пример.
// Този клас има нужда от специфични своства, за да бъде изобразен правилно.
// Това показва няколко неща:
// 1. ДомЕлемент класът не е правилна абстракция, щом се налага да презапишем целият рендер метод
// и да повторим част от неговата функционалност.
// 2. В JS нямаме интерфейси и абстрактни класове, което усложнява този тип имплементации. В крайна
// сметка езика не ни позволява, да направим значително по-добро решение тук в контекста на ООП.
// 3. В този случай ДомЕлемент, трябва да бъде абстрахиран на още няколко нива. Едно което да дава
// основната форма и няколко под нива, които да бъдат наследявани при различни случаи. Макар че това
// изглежда като решение на проблемите от точки 1 и 2, в действителност това добавя още едно ниво на
// наследяване. Наследяване на повече от 2-3 нива на вътре също се счита за лоша практика!
class DomImg extends DomElement {
  src;
  constructor(src) {
    super("img", "");
    this.src = src;
  }

  render() {
    const img = this.generateDomElement();
    // картинките нямат съдържание... имат сорс
    img.src = this.src;
    return img;
  }
}

// Отново както с картинката, виждаме случай в който не ни стигат свойствата на елемента
// Това може да се реши с ДомЕлемент клас, който да има всички споделени свойства, но винаги
// ще има елементи, които имат свои. Пример за това е линка: той е единственият елемент който
// има href свойство.
class DomA extends DomElement {
  href;
  props;
  constructor(content, href, props) {
    super("a", content);
    this.href = href;
    this.props = props;
  }

  render() {
    // Тук за разлика от примера с IMG правим нещо различно.
    // Вземаме целият резултат от рендер метода на родителя и го декорираме с новите
    // свойства, които са ни необходими. Това е защото на ДомЕлемент се припокрива с нуждите
    // на класа наследник.
    // Обърнете внимание на тази разлика:
    // IMG : Презаписва целият рендер метод със собствена логика. Ново поведение в родителя ще се загуби.
    // A : Презаписва целият рендер метод, но вътре използва метода от родителя. Ново поведение в родителя, ще се "наследи".
    const a = super.render();
    a.href = this.href;
    if (this.props) {
      let prps = Object.entries(this.props)[0];
      a.dataset[prps[0]] = prps[1];
    }

    return a;
  }
}

// Клас който улеснява използването на линк с mailto. Този клас ни помага да избегнем
// проверки в класовете, които ползват линкове, като директно (през фабриката) подадем
// инстанция на класа който ни трябва.
class MailLink extends DomA {
  constructor(content) {
    super(content, `mailto:${content}`);
  }
}

// Наивна и проста имплементация на фактори патърна. Факторитата могат да бъдат няколко типа:
// 1. Абстрактно фактори
// 2. Фактори метод
// 3. Фактори
// Това е пример за 3та точка. Факторитата могат да бъдат имплементирани и като статични класове.
// В нашият пример това няма значение. В практиката избягваме статичните методи и класове до колкото
// е възможно!
// Това е един от GoF шаблоните.
class GenericFactory {
  // лесно и бързо се имплементира с Мап. Може и с масив и обект.
  _registry = new Map();

  // Факторитата трябва да регистрират класовете с които ще боравят
  register(key, classRef) {
    if (!this._registry.has(key)) {
      this._registry.set(key, classRef);
    }
  }

  // факторито е отговорно да даде инстанция на класа, който търсим
  // не референция към класа.
  // т.е. фабриката -> произвежда обекта за нас, вместо нас.
  create(key, ...params) {
    if (!this._registry.has(key)) {
      return null;
    }
    const classRef = this._registry.get(key);
    return new classRef(...params);
  }
}

// Грид е познатото в индустрията име на типа таблица, която построихме.
class Grid {
  keys = [];
  data = [];
  dict;
  wrapper;
  elements;

  // тези шаблони биха били по-добре ако се подават като параметри
  headTemplates = {
    first_name: "a"
  };
  cellTemplates = {
    avatar: "img",
    friends: "ul",
    email: "mail"
  };

  constructor(data, elements, dict, wrapper) {
    this.data = data;
    this.dict = dict;
    this.wrapper = wrapper;

    // фабриката за елементи е един от основните начини да счупим връзката между много малки класове
    // и един клас, който използва всичките тях. Важно е тази връзка да се контролира, за да се постигне:
    // 1. По-лесно тестване
    // 2. По-малко места в които ще нанасяме промени, когато такива нстъпят
    // 3. Грануларен контрол относно, това до което всъшност има достъп класа.
    // Този клас не знае какъв елемент стои зад element.create("td"). Можем да подменим всичките елементи
    // с DomDiv и кодът надолу, ще продължи да работи, а с малко ЦСС - няма да можем да забележим, че
    // на страницата няма изрисувана <table>
    this.elements = elements;
    this.keys = Object.keys(this.data[0]);

    this.wrapper.addEventListener("click", this);
  }

  // Както учихме вече в лекциите за ДОМ. Всеки обект, който има метод handleEvent,
  // може да бъде закачен като callback на EventListener.
  handleEvent(e) {
    if (e.target.dataset.sortBy) {
      this.sortBy(e.target.dataset.sortBy);
      this.render();
    }
  }

  sortBy(prop) {
    this.data = this.data.sort((a, b) => {
      if (!isNaN(a[prop])) {
        return Number(a[prop]) - Number(b[prop]);
      }
      return a[prop].localeCompare(b[prop]);
    });
  }

  // Това е най-бързият (като време за изпълнение) начин за изчистване на децата
  // на един ДОМ елемент в модерните браузъри
  cleanHTML() {
    while (this.wrapper.firstElementChild !== null) {
      this.wrapper.removeChild(this.wrapper.firstElementChild);
    }
  }

  render() {
    this.cleanHTML();
    return this.wrapper.appendChild(
      this.buildTable(this.buildContent()).render()
    );
  }

  // Всички методи надолу които започват с build биха били удома си в отделен клас,
  // който следва Builder pattern. Самият грид не би трябвало да се интересува от това,
  // как се построяват отделните елементи.
  // Това че произвеждаме инстанциите във фабрика, не значи, че не трябва да са събрани
  // в "билдър" клас, чиято функция да бъде да строи таблици -> TableBuilder.
  // TableBuilder трябва бъде клас, който строи само таблицата, а не нейното съдържание :)
  // Съдържанието на таблицата, трябва да се строи отделно, за да е пълна картинката.
  buildTable(x) {
    return this.elements.create("table", x);
  }
  buildContent() {
    return [this.buildHead(), this.buildBody()];
  }
  buildHead() {
    return this.elements.create(
      "thead",
      this.buildTr(this.buildHeadCells(this.keys, "th"))
    );
  }
  buildBody() {
    return this.elements.create(
      "tbody",
      this.data.map(row =>
        this.buildTr(
          this.keys.map(cell =>
            this.buildCell("td", this.buildCellBody(cell, row[cell]))
          )
        )
      )
    );
  }
  buildCellBody(type, content) {
    return this.elements.create(this.cellTemplates[type], content) || content;
  }
  buildTr(x) {
    return this.elements.create("tr", x);
  }
  buildCell(type, x) {
    return this.elements.create(type, x);
  }
  buildCells(arr, type) {
    return arr.map(x => this.buildCell(type, x));
  }
  buildHeadLink(key, x) {
    return this.elements.create("a", x, "javascript:;", { sortBy: key });
  }
  buildHeadCell(type, x) {
    return this.elements.create(type, this.buildHeadLink(x, this.dict[x] || x));
  }
  buildHeadCells(arr, type) {
    return arr.map(x => this.buildHeadCell(type, x));
  }
}

// Основният ни клас, аналогичен на функция main().
// Това, което правим тук е да го подадем като обект на лисънъра, за да се изпълни, когато
// документа е готов.
class Main {
  handleEvent(e) {
    // сетъпваме статичният фактори метод, така контролираме, кой и какви елементи ни връща.
    DomElement.domFactory = document.createElement.bind(document);

    // създаваме си инстанция на факторито с цел разпространение на инстанции на ДомЕлемент-ите
    const DomElementsFactory = new GenericFactory();

    // Регистрираме всички елементи, които ще ползваме.
    // Отбележете че ДомЛи го няма тук!
    DomElementsFactory.register("table", DomTable);
    DomElementsFactory.register("thead", DomThead);
    DomElementsFactory.register("tbody", DomTbody);
    DomElementsFactory.register("tr", DomTr);
    DomElementsFactory.register("th", DomTh);
    DomElementsFactory.register("td", DomTd);
    DomElementsFactory.register("img", DomImg);
    DomElementsFactory.register("ul", DomUl);
    DomElementsFactory.register("a", DomA);
    DomElementsFactory.register("mail", MailLink);

    // логваме операцията в конзолата, за по-лесен дебъг
    // това не се прави в код достъпен за крайните потребители
    console.log(
      new Grid(
        MOCK.slice(0, 10),
        DomElementsFactory,
        {
          id: "Идент.",
          email: "Мейл",
          gender: "Пол",
          ip_address: "IP",
          first_name: "Име",
          avatar: "Картинка",
          friends: "Приятели",
          last_name: "Фамилия"
        },
        document.all.app
      ).render()
    );
  }
}

// изпълняваме си програмата, само когато ДОМ-а е готов.
document.addEventListener("DOMContentLoaded", new Main());
