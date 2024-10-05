export class Agent {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public name: string,
    public password: string,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}

  static create(email: string, name: string, password: string): Agent {
    return new Agent(undefined, email, name, password, new Date(), new Date());
  }

  updateProfile(name: string) {
    this.name = name;
    this.updatedAt = new Date();
  }
}
