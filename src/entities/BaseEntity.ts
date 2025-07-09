export abstract class BaseEntity {
  
  toPlain(): Record<string, any> {
    const result: Record<string, any> = {};

    for (const key of Object.keys(this)) {
      if (key.startsWith('_')) continue;

      const value = (this as any)[key];

      if (value instanceof BaseEntity) {
        result[key] = value.toPlain();
      } else if (Array.isArray(value)) {
        result[key] = value.map(item =>
          item instanceof BaseEntity ? item.toPlain() : item
        );
      } else {
        result[key] = value;
      }
    }

    return result;
  }
}