import { randomUUID } from 'node:crypto';

export class BaseEntity {
  private readonly _id: string;
  private readonly _createdAt: Date;

  constructor(id?: string) {
    this._id = id || randomUUID();
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  private _updatedAt: Date;

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public updateUpdateAt(): void {
    this._updatedAt = new Date();
  }
}
