<template>
  <div class="website-preview" :class="{ desktop: mode=='desktop', mobile: mode=='mobile' }">    
    <div class="btn-wrapper">
      <span @click="changeDisplayMode" class="device-toggle-btn" :class="{ desktop: mode=='desktop', mobile: mode=='mobile' }"></span>
    </div>
    <iframe ref="preview-iframe" frameBorder="0" src="../static/iframe.html"></iframe>
  </div>
</template>

<script>

export default {
  name: 'website-preview',
  props: ['definition'],
  methods: {
    changeDisplayMode: function () {
      this.mode = this.mode === 'desktop' ? 'mobile' : 'desktop'
    }
  },
  data () {
    return {
      mode: 'mobile'
    }
  },

  mounted () {
    // set a ref to the iframe for the mutation later
    // TODO: find propper way to do this!
    window.iframePreview = this.$refs['preview-iframe']
  }
}

</script>

<style lang="scss">

$green: #0ad387;
$lightWhite: rgba(255,255,255,.4);
$lightBlack: rgba(0,0,0,.4);

@import "./../../styles/variables";

.website-preview {

  iframe {
    display: block;
    margin: 15px auto;
    transition: all 1s ease;
    min-height: 80vh;
    min-width: calc(100% - 30px);
    width: auto;
    border: 1px solid lightgrey;
    //box-shadow: 0px 0px 1px 0px $lightBlack;

  }
  &.desktop {
    iframe {
      min-width: 340px;

    }
  }
  &.mobile {
    iframe {
      max-width: 340px;
    }
  }

  .btn-wrapper {
    position: fixed;
    bottom: .5rem;
    right: .5rem;
    z-index: 1000;
    background: $nav-bg;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    box-shadow: $box-shadow;
    
    .device-toggle-btn {
      z-index: 1001;
      display: block;
      margin: 10px auto;
      position: relative;
      display: block;
      transition: all 500ms ease;
      cursor: pointer;

      &:after,
      &:before {
        z-index: 1001;
        transition: all 500ms ease;
        content: " ";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
      }
      
      &.mobile {
        width: 40px;
        height:22px;
        background: #34495e;
        top: 9px;
        border-radius: 1px;
        &:after {
          width: 36px;
          height:18px;
          background: white;
          top: 2px;
          left: 2px;
          border-radius: 1px;
         
        }
        &:before {
          background: #34495e;
          width: 30px;
          height: 3px;
          top: 22px;
          left: 5px;
          border-radius: 1px;
        }    

      }
      &.desktop {
        width: 24px;
        height:40px;
        background: #34495e;
        top: 0px;
        border-radius: 3px;
        
        &:after {
          width: 20px;
          height:28px;
          background: white;
          top: 2px;
          left: 2px;
          border-radius: 5%;
        }
        &:before {
          background: white;
          width: 5px;
          height: 5px;
          top: 32px;
          left: 9px;
          border-radius: 50%;
        }    
      }
    }
  }
}

</style>
