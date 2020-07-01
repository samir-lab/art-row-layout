import Vue from 'vue';
import './css/index.scss';
import ArtRow from './row.js';
import ArtCol from './col.js';

ArtRow.install = Vue => Vue.component(ArtRow.name, ArtRow); 
ArtCol.install = Vue => Vue.component(ArtCol.name, ArtCol);

const components = [
  ArtRow,
  ArtCol
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ArtRow,
  ArtCol
};