(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{950:function(t,v,_){"use strict";_.r(v);var e=_(38),o=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"快速搞定虚拟-dom-的两个-大问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速搞定虚拟-dom-的两个-大问题"}},[t._v("#")]),t._v(" 快速搞定虚拟 DOM 的两个“大问题”")]),t._v(" "),_("blockquote",[_("p",[t._v("虚拟 DOM（Virtual DOM）"),_("code",[t._v("本质上是JS 和 DOM 之间的一个映射缓存")]),t._v("，它在形态上表现为一个能够描述 DOM 结构及其属性信息的 JS 对象")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://img-repo.poetries.top/images/20210428200221.png",alt:""}})]),t._v(" "),_("p",[t._v("就这个示例来说，你需要把握住以下两点：")]),t._v(" "),_("ul",[_("li",[t._v("虚拟 DOM 是 JS 对象")]),t._v(" "),_("li",[t._v("虚拟 DOM 是对真实 DOM 的描述")])]),t._v(" "),_("p",[t._v("我们看看 React 中的虚拟 DOM 大致是如何工作的")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("挂载阶段")]),t._v("，React 将结合 JSX 的描述，构建出虚拟 DOM 树，然后通过 "),_("code",[t._v("ReactDOM.render")]),t._v(" 实现虚拟 DOM 到真实 DOM 的映射（触发渲染流水线）；")]),t._v(" "),_("li",[_("strong",[t._v("更新阶段")]),t._v("，页面的变化在作用于真实 DOM 之前，会先作用于虚拟 "),_("code",[t._v("DOM")]),t._v("，虚拟 "),_("code",[t._v("DOM")]),t._v(" 将在 JS 层借助算法先对比出具体有哪些真实 DOM 需要被改变，然后再将这些改变作用于真实 DOM。")])]),t._v(" "),_("h2",{attrs:{id:"虚拟-dom-是如何解决问题的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-是如何解决问题的"}},[t._v("#")]),t._v(" 虚拟 DOM 是如何解决问题的")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://img-repo.poetries.top/images/20210428200431.png",alt:""}})]),t._v(" "),_("p",[t._v("而在虚拟 DOM 的加持下，事情变成了这样：")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://img-repo.poetries.top/images/20210428200450.png",alt:""}})]),t._v(" "),_("p",[t._v("注意图中的“模板”二字加了引号，这是因为虚拟 DOM 在实现上并不总是借助模板。比如 React 就使用了 JSX，前面咱们着重讲过，JSX 本质不是模板，而是一种使用体验和模板相似的 JS 语法糖")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("区别就在于多出了一层虚拟 DOM 作为缓冲层")]),t._v("。这个缓冲层带来的利好是："),_("code",[t._v("当 DOM 操作（渲染更新）比较频繁时，它会先将前后两次的虚拟 DOM 树进行对比，定位出具体需要更新的部分，生成一个“补丁集”，最后只把“补丁”打在需要更新的那部分真实 DOM 上，实现精准的“差量更新”")]),t._v("。这个过程对应的虚拟 DOM 工作流如下图所示：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://img-repo.poetries.top/images/20210428200541.png",alt:""}})]),t._v(" "),_("blockquote",[_("p",[t._v("注：图中的 "),_("code",[t._v("diff 和 patch")]),t._v(" 其实都是函数名，这些函数取材于一个独立的虚拟 DOM 库")])]),t._v(" "),_("p",[t._v("还需要说明的一点是， 虚拟 DOM 和 Redux 一样，不依附于任何具体的框架。学习虚拟 DOM，实际上可以完全不借助 React；但学习 React，就必须了解虚拟 DOM")]),t._v(" "),_("h2",{attrs:{id:"react-选用虚拟-dom-真的是为了更好的性能吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#react-选用虚拟-dom-真的是为了更好的性能吗"}},[t._v("#")]),t._v(" React 选用虚拟 DOM，真的是为了更好的性能吗？")]),t._v(" "),_("blockquote",[_("p",[t._v("在整个 DOM 操作的演化过程中，主要矛盾并不在于性能，而在于开发者写得爽不爽，在于研发体验/研发效率。"),_("code",[t._v("虚拟 DOM 不是别的，正是前端开发们为了追求更好的研发体验和研发效率而创造出来的高阶产物")]),t._v("。")])]),t._v(" "),_("p",[t._v("虚拟 DOM 并不一定会带来更好的性能，React 官方也从来没有把虚拟 DOM 作为性能层面的卖点对外输出过。"),_("code",[t._v("虚拟 DOM 的优越之处在于，它能够在提供更爽、更高效的研发模式（也就是函数式的 UI 编程方式）的同时，仍然保持一个还不错的性能")])]),t._v(" "),_("p",[t._v("性能问题属于前端领域复杂度比较高的问题。当我们量化性能的时候，往往并不能只追求一个单一的数据，而是需要结合具体的参照物、渲染的阶段、数据的吞吐量等各种要素来作分情况的讨论。")]),t._v(" "),_("p",[t._v("拿前面讲过的模板渲染来举例，我们可以对比一下它和虚拟 DOM 在性能开销上的差异。两者的渲染工作流对比如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://img-repo.poetries.top/images/20210428200801.png",alt:""}})]),t._v(" "),_("p",[t._v("从图中可以看出，模板渲染的步骤1，和虚拟 DOM 渲染的步骤1、2都属于 JS 范畴的行为，这两者是具备可比性的，我们放在一起来看：动态生成 HTML 字符串的过程本质是对字符串的拼接，对性能的消耗是有限的；而虚拟 DOM 的构建和 diff 过程逻辑则相对复杂，它不可避免地涉及递归、遍历等耗时操作。因此在 JS 行为这个层面，模板渲染胜出")]),t._v(" "),_("p",[t._v("模板渲染的步骤3，和虚拟 DOM 的步骤3 都属于 DOM 范畴的行为，两者具备可比性，因此我们仍然可以愉快地对比下去："),_("code",[t._v("模板渲染是全量更新，而虚拟 DOM 是差量更新")]),t._v("。")]),t._v(" "),_("p",[t._v("乍一看好像差量更新一定比全量更新高效，但你需要考虑这样一种情况：数据内容变化非常大（或者说整个发生了改变），促使差量更新计算出来的结果和全量更新极为接近（或者说完全一样）。")]),t._v(" "),_("p",[t._v("在这种情况下，DOM 更新的工作量基本一致，而虚拟 DOM 却伴随着开销更大的 JS 计算，此时会出现的一种现象就是模板渲染和虚拟 DOM 在整体性能上难分伯仲：若两者最终计算出的 DOM 更新内容完全一致，那么虚拟 DOM 大概率不敌模板渲染；但只要两者在最终 DOM 操作量上拉开那么一点点的差距，虚拟 DOM 就将具备战胜模板渲染的底气。"),_("code",[t._v("因为虚拟 DOM 的劣势主要在于 JS 计算的耗时，而 DOM 操作的能耗和 JS 计算的能耗根本不在一个量级")]),t._v("，极少量的 DOM 操作耗费的性能足以支撑大量的 JS 计算。")]),t._v(" "),_("blockquote",[_("p",[t._v("当然，上面讨论的这种情况相对来说比较极端。在实际的开发中，更加高频的场景是这样的：我每次 setState 的时候只修改少量的数据，比如一个对象中的某几个属性，再比如一个数组中的某几个元素。在这样的场景下，模板渲染和虚拟 DOM 之间 DOM 操作量级的差距就完全拉开了，虚拟 DOM 将在性能上具备绝对的优势。")])]),t._v(" "),_("blockquote",[_("p",[t._v("注意，此处的结论是“在 XXX 场景下，虚拟 DOM 相对于 XXX 具备性能优势”，它是有严格限定条件的。有人不到黄河心不死，可能又要问“那虚拟 DOM 对比 jQuery 呢？”“那虚拟 DOM 对比原生 DOM 呢？”。我想说的是，性能问题不能一概而论，而且咱都讲到这个份上了，就不要再钻性能这个牛角尖了。jQuery、原生 DOM 在思维模式上来说和虚拟 DOM 截然不同，强行比较意义不大。")])]),t._v(" "),_("p",[t._v("前面又是分析又是举例地说了这么多，其实我最终希望你明白的事情只有一件："),_("code",[t._v("虚拟 DOM 的价值不在性能，而在别处")]),t._v("。因此想要从性能角度来把握虚拟 DOM 的优势，无异于南辕北辙。偏偏在面试场景下，10 个人里面有 9 个都走这条歧路，最后9个人里面自然没有一个能自圆其说，实在让人惋惜。")]),t._v(" "),_("h2",{attrs:{id:"那么虚拟-dom-的价值到底是什么呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#那么虚拟-dom-的价值到底是什么呢"}},[t._v("#")]),t._v(" 那么虚拟 DOM 的价值到底是什么呢？")]),t._v(" "),_("p",[_("strong",[t._v("虚拟 DOM 解决的关键问题有以下两个。")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("研发体验/研发效率的问题")]),t._v("：DOM 操作模式的每一次革新，背后都是前端对效率和体验的进一步追求。虚拟 DOM 的出现，为数据驱动视图这一思想提供了高度可用的载体，使得前端开发能够基于函数式 UI 的编程方式实现高效的声明式编程。")]),t._v(" "),_("li",[_("code",[t._v("跨平台的问题")]),t._v("：虚拟 DOM 是对真实渲染内容的一层抽象。若没有这一层抽象，那么视图层将和渲染平台紧密耦合在一起，为了描述同样的视图内容，你可能要分别在 Web 端和 Native 端写完全不同的两套甚至多套代码。但现在中间多了一层描述性的虚拟 DOM，它描述的东西可以是真实 DOM，也可以是iOS 界面、安卓界面、小程序......同一套虚拟 DOM，可以对接不同平台的渲染逻辑，从而实现“一次编码，多端运行”，如下图所示。其实说到底，跨平台也是研发提效的一种手段，它在思想上和1是高度呼应的。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://img-repo.poetries.top/images/20210428201522.png",alt:""}})]),t._v(" "),_("p",[t._v("除了差量更新以外，“批量更新”也是虚拟 "),_("code",[t._v("DOM")]),t._v(" 在性能方面所做的一个重要努力：“批量更新”在通用虚拟 DOM 库里是由 "),_("code",[t._v("batch")]),t._v(" 函数来处理的。在差量更新速度非常快的情况下（比如极短的时间里多次操作同一个 "),_("code",[t._v("DOM")]),t._v("），用户实际上只能看到最后一次更新的效果。这种场景下，前面几次的更新动作虽然意义不大，但都会触发重渲染流程，带来大量不必要的高耗能操作")]),t._v(" "),_("p",[t._v("这时就需要请 "),_("code",[t._v("batch")]),t._v(" 来帮忙了，"),_("code",[t._v("batch")]),t._v(" 的作用是缓冲每次生成的补丁集，它会把收集到的多个补丁集暂存到队列中，再将最终的结果交给渲染函数，最终实现集中化的 "),_("code",[t._v("DOM")]),t._v(" 批量更新")])])}),[],!1,null,null,null);v.default=o.exports}}]);