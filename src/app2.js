import './app2.css'
import Vue from 'vue'

const init = (el) => {
  new Vue({
    el: el,
    data: {
      index: 0
    },
    template: `
      <section id="app2">
        <ol class="tab-bar">
          <li :class="index === 0 ? 'selected' : ''"
            @click="index=0"><span>1111</span></li>
          <li :class="index === 1 ? 'selected' : ''"
            @click="index=1"><span>2222</span></li>
        </ol>
        <ol class="tab-content">
          <li :class="index === 0 ? 'active': ''" >内容1</li>
          <li :class="index === 1? 'active': ''" >内容2</li>
        </ol>
      </section>
    `
  })
}

export default init

// const $tabBar = $("#app2 .tab-bar");
// const $tabContent = $("#app2 .tab-content");

// $tabBar.on("click", "li", e => {
//   const $li = $(e.currentTarget);
//   $li
//     .addClass("selected")
//     .siblings()
//     .removeClass("selected");
//   const index = $li.index();
//   $tabContent
//     .children()
//     .eq(index)
//     .addClass("active")
//     .siblings()
//     .removeClass("active");
// });

// $tabBar.children().eq(0).trigger('click')