import { Agent } from '../../domain/agent';

describe('Agent', () => {
  describe('constructor', () => {
    it('should create an Agent instance with the given properties', () => {
      const id = '1';
      const email = 'test@example.com';
      const name = 'Test Agent';
      const password = 'password123';
      const createdAt = new Date();
      const updatedAt = new Date();

      const agent = new Agent(id, email, name, password, createdAt, updatedAt);

      expect(agent.id).toBe(id);
      expect(agent.email).toBe(email);
      expect(agent.name).toBe(name);
      expect(agent.password).toBe(password);
      expect(agent.createdAt).toBe(createdAt);
      expect(agent.updatedAt).toBe(updatedAt);
    });

    it('should create an Agent instance with undefined id if not provided', () => {
      const email = 'test@example.com';
      const name = 'Test Agent';
      const password = 'password123';
      const createdAt = new Date();
      const updatedAt = new Date();

      const agent = new Agent(
        undefined,
        email,
        name,
        password,
        createdAt,
        updatedAt,
      );

      expect(agent.id).toBeUndefined();
      expect(agent.email).toBe(email);
      expect(agent.name).toBe(name);
      expect(agent.password).toBe(password);
      expect(agent.createdAt).toBe(createdAt);
      expect(agent.updatedAt).toBe(updatedAt);
    });
  });
});
