class VeterinaryClinic {
  constructor(clinicName, capacity) {
    this.clinicName = clinicName;
    this.capacity = capacity;
    this.clients = [];
    this.totalProfit = 0;
  }

  newCustomer(ownerName, petName, kind, procedures) {
    if (this.capacity <= this.clients.length) {
      throw new Error("Sorry, we are not able to accept more patients!");
    }

    let client = this.clients.find((c) => c.ownerName === ownerName);

    if (client === undefined) {
      client = {
        ownerName,
        pets: [],
      };
      this.clients.push(client);
    }

    let pet = client.pets.find((p) => p.petName === petName);

    if (pet && pet.procedures.length > 0) {
      throw new Error(
        `This pet is already registered under ${client.ownerName} name! ${
          pet.petName
        } is on our lists, waiting for ${pet.procedures.join(", ")}.`
      );
    }

    client.pets.push({ petName, kind, procedures });
    return `Welcome ${petName}!`;
  }

  onLeaving(ownerName, petName) {
    const client = this.clients.find((c) => c.ownerName === ownerName);

    if (client === undefined) {
      throw new Error("Sorry, there is no such client!");
    }

    const pet = client.pets.find((p) => p.petName === petName);

    if (!pet || pet.procedures.length === 0) {
      throw new Error(`Sorry, there are no procedures for ${petName}!`);
    }

    this.totalProfit += pet.procedures.length * 500;
    pet.procedures = [];

    return `Goodbye ${petName}. Stay safe!`;
  }

  toString() {
    let percentage = 0;
    let sum = 0;

    const m = this.clients.map((c) =>
      c.pets.filter((p) => p.procedures.length > 0)
    );

    m.forEach((n) => (sum += n.length));

    this.clients.forEach((c) => {
      c.pets.forEach((p) => {
        if (p.procedures.length > 0) {
          percentage = Math.floor(sum * this.capacity);
        }
      });
    });

    let output = `${
      this.clinicName
    } is ${percentage}% busy today!\nTotal profit: ${this.totalProfit.toFixed(
      2
    )}$\n`;

    this.clients
      .sort((a, b) => a.ownerName.localeCompare(b.ownerName))
      .forEach((c) => {
        output += `${c.ownerName} with:\n`;
        c.pets
          .sort((a, b) => a.petName.localeCompare(b.petName))
          .forEach((p) => {
            output += `---${
              p.petName
            } - a ${p.kind.toLowerCase()} that needs: ${p.procedures.join(
              ", "
            )}\n`;
          });
      });

    return output.trim();
  }
}

let clinic = new VeterinaryClinic("SoftCare", 10);
console.log(
  clinic.newCustomer("Jim Jones", "Tom", "Cat", ["A154B", "2C32B", "12CDB"])
);
console.log(
  clinic.newCustomer("Anna Morgan", "Max", "Dog", ["SK456", "DFG45", "KS456"])
);
console.log(clinic.newCustomer("Jim Jones", "Tiny", "Cat", ["A154B"]));
console.log(clinic.onLeaving("Jim Jones", "Tiny"));
console.log(clinic.toString());
clinic.newCustomer("Jim Jones", "Sara", "Dog", ["A154B"]);
console.log(clinic.toString());
