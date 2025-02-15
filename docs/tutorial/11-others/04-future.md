---
title: Future of alova
sidebar_position: 40
---

alovajs is positioned as a lightweight request strategy library. It currently provides good support in terms of request functions and request strategies, but the future of alovajs does not stop there.

## More request strategies

This is the direction that remains unchanged, and we will continue to explore efficient and easy-to-use request strategies based on common businesses.

## More UI framework support

Although alovajs is a request tool based on UI framework, its flexible design allows us to use it in various UI frameworks. It will eventually be compatible with the following UI frameworks and js environments:

- Functional style framework, such as `react/react-native/vue-composntion/svelte/solid/preact/qwik`.
- SSR frameworks such as `next/nuxt/sveltekit`.
- class style framework, such as `angular/lit/stencil`.
- options style framework, such as `vue-options/native applet (China🇨🇳)`.
- Multi-end adaptation framework, such as `Uniapp/Taro` (China 🇨🇳).

Please check [Go to UI Framework](/category/framework) for details.

## Automatic management and maintenance of APIs

In the future, alovajs is also committed to solving front-end API problems and further simplifying the workflow of front-end development. This is the next development direction of alovajs: **automatic management and maintenance of APIs**, which specifically includes the following three points.

1. Automatically generate a request function with complete ts type and complete description. Whether it is a js project or a ts project, the call does not need to be introduced, making it as convenient for developers as directly calling `location.reload`, and the request function can be directly seen A complete description and request parameter type hints, which can be automatically generated by openAPI.

2. Since the automatically generated request function has a complete description and type hint, develop a vscode plug-in to quickly retrieve the API you need to use through keywords, and you no longer need to consult the API documentation.

3. Solve the problem of front-end and back-end collaboration fault. Any changes in the interface are known to the front-end and can be notified when starting the project. If changes are found when building the project, an error will be thrown to stop the build. If it is a ts project, it will also be compiled. When an error is thrown, you can also view the change record through the vscode plugin.
