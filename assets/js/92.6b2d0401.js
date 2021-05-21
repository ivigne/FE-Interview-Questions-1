(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{930:function(e,t,n){"use strict";n.r(t);var o=n(38),v=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"一、为什么需要虚拟dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么需要虚拟dom"}},[e._v("#")]),e._v(" 一、为什么需要虚拟DOM")]),e._v(" "),n("blockquote",[n("p",[e._v("先介绍浏览器加载一个"),n("code",[e._v("HTML")]),e._v("文件需要做哪些事，帮助我们理解为什么我们需要虚拟"),n("code",[e._v("DOM")]),e._v("。"),n("code",[e._v("webkit")]),e._v("引擎的处理流程")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/605.png",alt:"img"}})]),e._v(" "),n("blockquote",[n("p",[e._v("所有浏览器的引擎工作流程都差不多，如上图大致分5步：创建"),n("code",[e._v("DOM tree")]),e._v(" –> 创建"),n("code",[e._v("Style Rules")]),e._v(" -> 构建"),n("code",[e._v("Render tree")]),e._v(" -> 布局"),n("code",[e._v("Layout")]),e._v(" –> 绘制"),n("code",[e._v("Painting")])])]),e._v(" "),n("ul",[n("li",[e._v("第一步，用"),n("code",[e._v("HTML")]),e._v("分析器，分析"),n("code",[e._v("HTML")]),e._v("元素，构建一颗"),n("code",[e._v("DOM")]),e._v("树。")]),e._v(" "),n("li",[e._v("第二步：用"),n("code",[e._v("CSS")]),e._v("分析器，分析"),n("code",[e._v("CSS")]),e._v("文件和元素上的"),n("code",[e._v("inline")]),e._v("样式，生成页面的样式表。")]),e._v(" "),n("li",[e._v("第三步：将上面的"),n("code",[e._v("DOM")]),e._v("树和样式表，关联起来，构建一颗"),n("code",[e._v("Render")]),e._v("树。这一过程又称为"),n("code",[e._v("Attachment")]),e._v("。每个"),n("code",[e._v("DOM")]),e._v("节点都有"),n("code",[e._v("attach")]),e._v("方法，接受样式信息，返回一个"),n("code",[e._v("render")]),e._v("对象（又名"),n("code",[e._v("renderer")]),e._v("）。这些"),n("code",[e._v("render")]),e._v("对象最终会被构建成一颗"),n("code",[e._v("Render")]),e._v("树。")]),e._v(" "),n("li",[e._v("第四步：有了"),n("code",[e._v("Render")]),e._v("树后，浏览器开始布局，会为每个"),n("code",[e._v("Render")]),e._v("树上的节点确定一个在显示屏上出现的精确坐标值。")]),e._v(" "),n("li",[e._v("第五步："),n("code",[e._v("Render")]),e._v("数有了，节点显示的位置坐标也有了，最后就是调用每个节点的"),n("code",[e._v("paint")]),e._v("方法，让它们显示出来。")])]),e._v(" "),n("blockquote",[n("p",[e._v("当你用传统的源生"),n("code",[e._v("api")]),e._v("或"),n("code",[e._v("jQuery")]),e._v("去操作"),n("code",[e._v("DOM")]),e._v("时，浏览器会从构建"),n("code",[e._v("DOM")]),e._v("树开始从头到尾执行一遍流程。比如当你在一次操作时，需要更新"),n("code",[e._v("10")]),e._v("个"),n("code",[e._v("DOM")]),e._v("节点，理想状态是一次性构建完"),n("code",[e._v("DOM")]),e._v("树，再执行后续操作。但浏览器没这么智能，收到第一个更新"),n("code",[e._v("DOM")]),e._v("请求后，并不知道后续还有9次更新操作，因此会马上执行流程，最终执行10次流程。显然例如计算"),n("code",[e._v("DOM")]),e._v("节点的坐标值等都是白白浪费性能，可能这次计算完，紧接着的下一个"),n("code",[e._v("DOM")]),e._v("更新请求，这个节点的坐标值就变了，前面的一次计算是无用功。")])]),e._v(" "),n("ul",[n("li",[e._v("即使计算机硬件一直在更新迭代，操作"),n("code",[e._v("DOM")]),e._v("的代价仍旧是昂贵的，频繁操作还是会出现页面卡顿，影响用户的体验。真实的"),n("code",[e._v("DOM")]),e._v("节点，哪怕一个最简单的div也包含着很多属性，可以打印出来直观感受一下")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/606.png",alt:"img"}})]),e._v(" "),n("blockquote",[n("p",[e._v("虚拟"),n("code",[e._v("DOM")]),e._v("就是为了解决这个浏览器性能问题而被设计出来的。例如前面的例子，假如一次操作中有"),n("code",[e._v("10")]),e._v("次更新"),n("code",[e._v("DOM")]),e._v("的动作，虚拟"),n("code",[e._v("DOM")]),e._v("不会立即操作"),n("code",[e._v("DOM")]),e._v("，而是将这"),n("code",[e._v("10")]),e._v("次更新的"),n("code",[e._v("diff")]),e._v("内容保存到本地的一个"),n("code",[e._v("js")]),e._v("对象中，最终将这个js对象一次性"),n("code",[e._v("attach")]),e._v("到"),n("code",[e._v("DOM")]),e._v("树上，通知浏览器去执行绘制工作，这样可以避免大量的无谓的计算量")])]),e._v(" "),n("h2",{attrs:{id:"二、实现虚拟dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、实现虚拟dom"}},[e._v("#")]),e._v(" 二、实现虚拟DOM")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<div id="real-container">\n    <p>Real DOM</p>\n    <div>cannot update</div>\n    <ul>\n        <li className="item">Item 1</li>\n        <li className="item">Item 2</li>\n        <li className="item">Item 3</li>\n    </ul>\n</div>\n')])])]),n("blockquote",[n("p",[e._v("用"),n("code",[e._v("js")]),e._v("对象来模拟"),n("code",[e._v("DOM")]),e._v("节点如下")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const tree = Element('div', { id: 'virtual-container' }, [\n    Element('p', {}, ['Virtual DOM']),\n    Element('div', {}, ['before update']),\n    Element('ul', {}, [\n        Element('li', { class: 'item' }, ['Item 1']),\n        Element('li', { class: 'item' }, ['Item 2']),\n        Element('li', { class: 'item' }, ['Item 3']),\n    ]),\n]);\n\nconst root = tree.render();\ndocument.getElementById('virtualDom').appendChild(root);\n")])])]),n("blockquote",[n("p",[e._v("用"),n("code",[e._v("js")]),e._v("对象模拟"),n("code",[e._v("DOM")]),e._v("节点的好处是，页面的更新可以先全部反映在"),n("code",[e._v("js")]),e._v("对象上，操作内存中的"),n("code",[e._v("js")]),e._v("对象的速度显然要快多了。等更新完后，再将最终的"),n("code",[e._v("js")]),e._v("对象映射成真实的"),n("code",[e._v("DOM")]),e._v("，交由浏览器去绘制")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function Element(tagName, props, children) {\n    if (!(this instanceof Element)) {\n        return new Element(tagName, props, children);\n    }\n\n    this.tagName = tagName;\n    this.props = props || {};\n    this.children = children || [];\n    this.key = props ? props.key : undefined;\n\n    let count = 0;\n    this.children.forEach((child) => {\n        if (child instanceof Element) {\n            count += child.count;\n        }\n        count++;\n    });\n    this.count = count;\n}\n")])])]),n("blockquote",[n("p",[e._v("第一个参数是节点名（如"),n("code",[e._v("div")]),e._v("），第二个参数是节点的属性（如"),n("code",[e._v("class")]),e._v("），第三个参数是子节点（如"),n("code",[e._v("ul")]),e._v("的"),n("code",[e._v("li")]),e._v("）。除了这三个参数会被保存在对象上外，还保存了"),n("code",[e._v("key")]),e._v("和"),n("code",[e._v("count")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/607.png",alt:"img"}})]),e._v(" "),n("blockquote",[n("p",[e._v("有了"),n("code",[e._v("js")]),e._v("对象后，最终还需要将其映射成真实的"),n("code",[e._v("DOM")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Element.prototype.render = function() {\n    const el = document.createElement(this.tagName);\n    const props = this.props;\n\n    for (const propName in props) {\n        setAttr(el, propName, props[propName]);\n    }\n\n    this.children.forEach((child) => {\n        const childEl = (child instanceof Element) ? child.render() : document.createTextNode(child);\n        el.appendChild(childEl);\n    });\n\n    return el;\n};\n")])])]),n("blockquote",[n("p",[e._v("根据"),n("code",[e._v("DOM")]),e._v("名调用源生的"),n("code",[e._v("createElement")]),e._v("创建真实"),n("code",[e._v("DOM")]),e._v("，将"),n("code",[e._v("DOM")]),e._v("的属性全都加到这个"),n("code",[e._v("DOM")]),e._v("元素上，如果有子元素继续递归调用创建子元素，并"),n("code",[e._v("appendChild")]),e._v("挂到该"),n("code",[e._v("DOM")]),e._v("元素上。这样就完成了从创建虚拟"),n("code",[e._v("DOM")]),e._v("到将其映射成真实"),n("code",[e._v("DOM")]),e._v("的全部工作")])]),e._v(" "),n("h2",{attrs:{id:"三、diff算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、diff算法"}},[e._v("#")]),e._v(" 三、Diff算法")]),e._v(" "),n("blockquote",[n("p",[e._v("我们已经完成了创建虚拟"),n("code",[e._v("DOM")]),e._v("并将其映射成真实"),n("code",[e._v("DOM")]),e._v("的工作，这样所有的更新都可以先反映到虚拟"),n("code",[e._v("DOM")]),e._v("上，如何反映呢？需要明确一下"),n("code",[e._v("Diff")]),e._v("算法")])]),e._v(" "),n("ul",[n("li",[e._v("两棵树如果完全比较时间复杂度是"),n("code",[e._v("O(n^3)")])]),e._v(" "),n("li",[n("code",[e._v("React")]),e._v("的"),n("code",[e._v("Diff")]),e._v("算法的时间复杂度是"),n("code",[e._v("O(n)")]),e._v("。要实现这么低的时间复杂度，意味着只能平层地比较两棵树的节点，放弃了深度遍历")]),e._v(" "),n("li",[e._v("这样做，似乎牺牲了一定的精确性来换取速度，但考虑到现实中前端页面通常也不会跨层级移动"),n("code",[e._v("DOM")]),e._v("元素，所以这样做是最优的。")])]),e._v(" "),n("p",[e._v("我们新创建一棵树，用于和之前的树进行比较")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const newTree = Element('div', { id: 'virtual-container' }, [\n    Element('h3', {}, ['Virtual DOM']),                     // REPLACE\n    Element('div', {}, ['after update']),                   // TEXT\n    Element('ul', { class: 'marginLeft10' }, [              // PROPS\n        Element('li', { class: 'item' }, ['Item 1']),\n        // Element('li', { class: 'item' }, ['Item 2']),    // REORDER remove\n        Element('li', { class: 'item' }, ['Item 3']),\n    ]),\n]);\n")])])]),n("p",[e._v("只考虑平层地"),n("code",[e._v("Diff")]),e._v("的话，就简单多了，只需要考虑以下4种情况")]),e._v(" "),n("blockquote",[n("p",[e._v("第一种是最简单的，节点类型变了，例如下图中的"),n("code",[e._v("P")]),e._v("变成了"),n("code",[e._v("h3")]),e._v("。我们将这个过程称之为"),n("code",[e._v("REPLACE")]),e._v("。直接将旧节点卸载（"),n("code",[e._v("componentWillUnmount")]),e._v("）并装载新节点（"),n("code",[e._v("componentWillMount")]),e._v("）就行了")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/608.png",alt:"img"}})]),e._v(" "),n("p",[e._v("旧节点包括下面的子节点都将被卸载，如果新节点和旧节点仅仅是类型不同，但下面的所有子节点都一样时，这样做显得效率不高。但为了避免"),n("code",[e._v("O(n^3)")]),e._v("的时间复杂度，这样做是值得的。这也提醒了"),n("code",[e._v("React")]),e._v("开发者，应该避免无谓的节点类型的变化，例如运行时将"),n("code",[e._v("div")]),e._v("变成"),n("code",[e._v("p")]),e._v("就没什么太大意义")]),e._v(" "),n("blockquote",[n("p",[e._v("第二种也比较简单，节点类型一样，仅仅属性或属性值变了")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("renderA: <ul>\nrenderB: <ul class: 'marginLeft10'>\n=> [addAttribute class \"marginLeft10\"]\n")])])]),n("blockquote",[n("p",[e._v("我们将这个过程称之为"),n("code",[e._v("PROPS")]),e._v("。此时不会触发节点的卸载（"),n("code",[e._v("componentWillUnmount")]),e._v("）和装载（"),n("code",[e._v("componentWillMount")]),e._v("）动作。而是执行节点更新（"),n("code",[e._v("shouldComponentUpdate")]),e._v("到"),n("code",[e._v("componentDidUpdate")]),e._v("的一系列方法）")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function diffProps(oldNode, newNode) {\n    const oldProps = oldNode.props;\n    const newProps = newNode.props;\n\n    let key;\n    const propsPatches = {};\n    let isSame = true;\n\n    // find out different props\n    for (key in oldProps) {\n        if (newProps[key] !== oldProps[key]) {\n            isSame = false;\n            propsPatches[key] = newProps[key];\n        }\n    }\n\n    // find out new props\n    for (key in newProps) {\n        if (!oldProps.hasOwnProperty(key)) {\n            isSame = false;\n            propsPatches[key] = newProps[key];\n        }\n    }\n\n    return isSame ? null : propsPatches;\n}\n")])])]),n("ul",[n("li",[e._v("第三种是文本变了，文本对也是一个"),n("code",[e._v("Text Node")]),e._v("，也比较简单，直接修改文字内容就行了，我们将这个过程称之为"),n("code",[e._v("TEXT")])]),e._v(" "),n("li",[e._v("第四种是移动，增加，删除子节点，我们将这个过程称之为"),n("code",[e._v("REORDER")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/609.png",alt:"img"}})]),e._v(" "),n("blockquote",[n("p",[e._v("在中间插入一个节点，程序员写代码很简单：$(B).after(F)。但如何高效地插入呢？简单粗暴的做法是：卸载C，装载F，卸载D，装载C，卸载E，装载D，装载E。如下图")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/610.png",alt:"img"}})]),e._v(" "),n("blockquote",[n("p",[e._v("我们写"),n("code",[e._v("JSX")]),e._v("代码时，如果没有给数组或枚举类型定义一个"),n("code",[e._v("key")]),e._v("，就会看到下面这样的"),n("code",[e._v("warning")]),e._v("。"),n("code",[e._v("React")]),e._v("提醒我们，没有"),n("code",[e._v("key")]),e._v("的话，涉及到移动，增加，删除子节点的操作时，就会用上面那种简单粗暴的做法来更新。虽然程序运行不会有错，但效率太低，因此"),n("code",[e._v("React")]),e._v("会给我们一个"),n("code",[e._v("warning")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/611.png",alt:"img"}})]),e._v(" "),n("blockquote",[n("p",[e._v("如果我们在"),n("code",[e._v("JSX")]),e._v("里为数组或枚举型元素增加上"),n("code",[e._v("key")]),e._v("后，"),n("code",[e._v("React")]),e._v("就能根据"),n("code",[e._v("key")]),e._v("，直接找到具体的位置进行操作，效率比较高。如下图")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/612.png",alt:"img"}})]),e._v(" "),n("blockquote",[n("p",[e._v("常见的最小编辑距离问题，可以用"),n("code",[e._v("Levenshtein Distance")]),e._v("算法来实现，时间复杂度是"),n("code",[e._v("O(M*N)")]),e._v("，但通常我们只要一些简单的移动就能满足需要，降低点精确性，将时间复杂度降低到"),n("code",[e._v("O(max(M, N)")]),e._v("即可")])]),e._v(" "),n("p",[e._v("最终"),n("code",[e._v("Diff")]),e._v("出来的结果如下")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    1: [ {type: REPLACE, node: Element} ],\n    4: [ {type: TEXT, content: "after update"} ],\n    5: [ {type: PROPS, props: {class: "marginLeft10"}}, {type: REORDER, moves: [{index: 2, type: 0}]} ],\n    6: [ {type: REORDER, moves: [{index: 2, type: 0}]} ],\n    8: [ {type: REORDER, moves: [{index: 2, type: 0}]} ],\n    9: [ {type: TEXT, content: "Item 3"} ],\n}\n')])])]),n("h2",{attrs:{id:"四、映射成真实dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、映射成真实dom"}},[e._v("#")]),e._v(" 四、映射成真实DOM")]),e._v(" "),n("blockquote",[n("p",[e._v("虚拟"),n("code",[e._v("DOM")]),e._v("有了，"),n("code",[e._v("Diff")]),e._v("也有了，现在就可以将"),n("code",[e._v("Diff")]),e._v("应用到真实"),n("code",[e._v("DOM")]),e._v("上了")])]),e._v(" "),n("p",[e._v("深度遍历DOM将Diff的内容更新进去")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function dfsWalk(node, walker, patches) {\n    const currentPatches = patches[walker.index];\n\n    const len = node.childNodes ? node.childNodes.length : 0;\n    for (let i = 0; i < len; i++) {\n        walker.index++;\n        dfsWalk(node.childNodes[i], walker, patches);\n    }\n\n    if (currentPatches) {\n        applyPatches(node, currentPatches);\n    }\n}\n")])])]),n("blockquote",[n("p",[e._v("具体更新的代码如下，其实就是根据"),n("code",[e._v("Diff")]),e._v("信息调用源生"),n("code",[e._v("API")]),e._v("操作"),n("code",[e._v("DOM")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function applyPatches(node, currentPatches) {\n    currentPatches.forEach((currentPatch) => {\n        switch (currentPatch.type) {\n            case REPLACE: {\n                const newNode = (typeof currentPatch.node === 'string')\n                    ? document.createTextNode(currentPatch.node)\n                    : currentPatch.node.render();\n                node.parentNode.replaceChild(newNode, node);\n                break;\n            }\n            case REORDER:\n                reorderChildren(node, currentPatch.moves);\n                break;\n            case PROPS:\n                setProps(node, currentPatch.props);\n                break;\n            case TEXT:\n                if (node.textContent) {\n                    node.textContent = currentPatch.content;\n                } else {\n                    // ie\n                    node.nodeValue = currentPatch.content;\n                }\n                break;\n            default:\n                throw new Error(`Unknown patch type ${currentPatch.type}`);\n        }\n    });\n}\n")])])]),n("blockquote",[n("p",[e._v("虚拟"),n("code",[e._v("DOM")]),e._v("的目的是将所有操作累加起来，统计计算出所有的变化后，统一更新一次`DOM")])])])}),[],!1,null,null,null);t.default=v.exports}}]);