# 单例模式

传统的单例模式实际上被用来克服所有的代码必须写到 `class` 类中的事实。

```ts
class Singleton {
  private static instance: Singleton;
  private constructor() {
    // ..
  }

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  someMethod() {}
}

let someThing = new Singleton(); // Error: constructor of 'singleton' is private

let instacne = Singleton.getInstance(); // do some width the instance
```

然而，如果你不想延迟初始化，你可以使用 `namespace` 替代：

```ts
namespace Singleton {
  // .. 其他初始化的东西

  export function someMethod() {}
}

// 使用
Singleton.someMethod();
```

::: warning
单例只是[全局](https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons/142450#142450)的一个别称。
:::

对大部分使用者来说，`namespace` 可以用模块来替代。

```ts
// someFile.ts
// ... any one time initialization goes here ...
export function someMethod() {}

// Usage
import { someMethod } from './someFile';
```
