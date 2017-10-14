<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <ul class="nav">
          <router-link to="/" tag="li" exact>
            <img width="60" src="static/mika-i-logo.png" title="Mika I."></i>
            <!-- <i class="fa fa-fw" aria-hidden="true" title=""></i> -->
          </router-link>
          <router-link to="/1" tag="li">Menu 1</router-link>
          <router-link to="/2" tag="li">Menu 2</router-link>
          <router-link to="/" tag="li">Menu 3</router-link>
        </ul>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Group from './components/Group.vue'

export default {
  name: 'app',
  components: {
    'group': Group
  }
}
</script>


<style lang="scss">

@import "styles/variables";

#app > .header {
  background-color: $nav-bg;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  .inner {
    box-sizing: border-box;
    margin: 0px auto;
    padding: 0;
    ul.nav {
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: wrap;
      li {
        position: relative;
        display: inline-block;
        overflow: visible;
        margin: 0;
        font-size: 1.6rem;
        font-weight: 300;
        padding: 1.3rem 1rem;
        text-align: center;
        cursor: pointer;
        transition: all ease 300ms;
        color: $nav-link-color;
        background-color: $nav-bg;
        min-width: 5rem;
        border: none;
        text-shadow: 0px 0px 3px #fafafa;
        &:hover {
          color: $nav-link-color-hover;
          font-weight: 400;
          background-color: $nav-bg-hover;
          ul.sub-nav {
            li {
              display: block;
              opacity: 1;
            }
          }

        }
        a {
          margin: 0;
        }


    
        &.expanded {
          overflow:visible;
        }
        ul.sub-nav {
          width: 100%;
          left: 0;
          top: 3.5rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          li {
            opacity: 0;
            margin: 0;
            //min-width: 180px;
            text-align: center;
            //border-top: 1px solid lighten($nav-bg, 10%);
            display: none;
            // background-color: $bg;
            background-color: rgba(245, 245, 245, .4);
            padding: .3rem 1rem;
          }
        }
      }
    }
  }
}
.logo {
  width: 24px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}



.color-picker {
  position: absolute;
  left: 5px;
  top: 23px;
}

label {
  font-variant: all-small-caps;
  font-size: 11px;
  font-weight: 700;
}

.setting-row {
  position: relative;
  
  .label {
    margin: 0 0 0 5px;
    font-variant: all-small-caps;
    font-size: 12px;
    font-weight: 400;
  }
  .backdrop {
    position: fixed;
    top:0; right:0; bottom:0; left:0;
    background:transparent;
    display: block;
  }
  .color-preview {
    position: absolute;
    right: 10px;
    top: 2px;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    box-shadow: $box-shadow;
  }
}


</style>
