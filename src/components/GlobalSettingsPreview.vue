<template>
  <div class="global-settings-preview">
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
      
      <!-- body -->
      <rect :fill="styles.bodyBackgroundColor" 
            height="500" width="400" y="0" x="0"/>
      
      <!-- header -->
      <rect :fill="styles.headerBackgroundColor"
            stroke="#000" height="46" width="398" y="1" x="1" stroke-width="0"/>
      
      <!-- content -->
      <rect :fill="styles.contentBackgroundColor" 
            stroke="#000" height="349" width="340" y="50" x="30" stroke-width="0" />
      <line :stroke="styles.headerBorderColor" 
            stroke-width="3" stroke-linecap="null" 
            stroke-linejoin="null" 
            y2="48" x2="399" y1="47.5" x1="1" 
            fill-opacity="null" 
            stroke-opacity="null" fill="none"/>
      

      <!-- image 1 -->
      <rect stroke="#000" height="109" width="162" y="70" x="39" stroke-opacity="null" stroke-width="0" fill="#BBBBBB"/>
      <line stroke="#000" opacity="0.3" stroke-linejoin="null" y2="75" x2="198" y1="174.666662" x1="43.996197" stroke-opacity="null" fill="#BBBBBB"/>
      <!-- image 2 -->
      <rect stroke="#000" height="109.333329" width="162" y="276" x="39" stroke-opacity="null" stroke-width="0" fill="#BBBBBB"/>
       <line stroke="#000" opacity="0.3" stroke-linecap="null" stroke-linejoin="null" y2="281" x2="198" y1="380" x1="43" stroke-opacity="null" fill="#BBBBBB"/>

      <!-- Sub Menu (default) -->
      <rect :fill="styles.subNavBackgroundColor.default"
            stroke="#000" height="30" width="110" y="49.5" x="58" stroke-opacity="null" stroke-width="0"/>
      <line :stroke="styles.subNavBorderColor.default"
            stroke-width="3" stroke-linecap="null" stroke-linejoin="null" y2="81" x2="168" y1="81" x1="58" fill-opacity="null" stroke-opacity="null" fill="none"/>
      <text :fill="styles.subNavTextColor.default" 
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="70" x="64" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000">Sub Menu</text>
      <!-- Sub Menu Item (hover) -->
      <rect :fill="styles.subNavBackgroundColor.hover" 
            stroke="#000" height="30" width="110" y="82.83333" x="58" stroke-opacity="null" stroke-width="0"/>
      <line :stroke="styles.subNavBorderColor.hover"
            stroke-width="3" stroke-linecap="null" stroke-linejoin="null" y2="114" x2="168" y1="114" x1="58" fill-opacity="null" stroke-opacity="null" fill="none"/>
      <text :fill="styles.subNavTextColor.hover"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_14" y="104.666653" x="64.000018" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000">Hover Sub Menu</text>
      <!-- Sub Menu Item (active) -->
      <rect :fill="styles.subNavBackgroundColor.active" 
            stroke="#000" height="30" width="110" y="116" x="58" stroke-opacity="null" stroke-width="0"/>
      <line :stroke="styles.subNavBorderColor.active"
            stroke-width="3" stroke-linecap="null" stroke-linejoin="null" y2="147" x2="168" y1="147" x1="58" fill-opacity="null" stroke-opacity="null" fill="none"/>
      <text :fill="styles.subNavTextColor.active"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="137" x="64" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000">Active Sub Menu</text>
      

      <!-- Menu Item (default) -->
      <rect :fill="styles.navBackgroundColor.default"
            :stroke="styles.navBorderColor.default"
            height="26" width="50" y="16" x="7" stroke-opacity="null" stroke-width="2"/>
      <text :fill="styles.navTextColor.default"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="14" y="35" x="14" stroke-opacity="null" stroke-width="0" stroke="#000" >Home</text>
      <!-- Menu Item (hover) -->
      <rect :fill="styles.navBackgroundColor.hover"
            :stroke="styles.navBorderColor.hover"
            height="26" width="94" y="16" x="66" stroke-opacity="null" stroke-width="2"/>
      <text :fill="styles.navTextColor.hover"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="14" y="35" x="74" stroke-opacity="null" stroke-width="0" stroke="#000">Hover Menu</text>
      <!-- Menu Item (active) -->
      <rect :fill="styles.navBackgroundColor.active"
            :stroke="styles.navBorderColor.active"
            height="25" width="91" y="16" x="170" stroke-opacity="null" stroke-width="2"/>
      <text :fill="styles.navTextColor.active"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="14" y="35" x="176" stroke-opacity="null" stroke-width="0" stroke="#000">Active Menu</text>
     

      <!-- CTA (default) -->
      <rect :fill="styles.navCTABackgroundColor.default"
            :stroke="styles.navCTABorderColor.default"
            height="38" width="40" y="5" x="290" stroke-opacity="null" stroke-width="2"/>
      <text :fill="styles.navCTATextColor.default"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="14" y="30" x="296" stroke-opacity="null" stroke-width="0" stroke="#000">CTA</text>
      <!-- CTA (hover) -->
      <rect :fill="styles.navCTABackgroundColor.hover"
            :stroke="styles.navCTABorderColor.hover"
            height="38" width="60" y="5" x="335" stroke-opacity="null" stroke-width="2"/>
      <text :fill="styles.navCTATextColor.hover"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="14" y="26" x="352" stroke-opacity="null" stroke-width="0" stroke="#000">CTA</text>
      <text :fill="styles.navCTATextColor.hover"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="10" y="36" x="352" stroke-opacity="null" stroke-width="0" stroke="#000">Hover</text>
     


      <!-- Main Content (Heading Text) -->
      <!-- 1/2 -->
      <text :fill="styles.contentHeadingTextColor"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="16" id="svg_30" y="87.333324" x="219.666653" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" >Heading</text>
      <!-- 2/2 -->
      <text :fill="styles.contentHeadingTextColor"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="16" id="svg_67" y="293.333304" x="219.666653" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000">Heading</text>
       

      <!-- Main Content (Main Text) -->
      <!-- 1/2 -->
      <text :fill="styles.contentMainTextColor"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="107" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">Lorem ipsum dolor sit ame</text>
      <text :fill="styles.contentMainTextColor"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="120" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">consectetur adipiscing elit</text>
      <text :fill="styles.contentMainTextColor"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="133" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">sed do eiusmod tempor</text>
      <text :fill="styles.contentMainTextColor"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="147" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">incididunt ut link color et</text>
      <text :fill="styles.contentLinkTextColor.default"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="160" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">Read More... (Default)</text>
      <text :fill="styles.contentLinkTextColor.hover"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="173" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">Read More... (Hover)</text>
      <!-- 2/2 -->
      <text :fill="styles.contentMainTextColor"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="313" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">Lorem ipsum dolor sit ame</text>
      <text :fill="styles.contentMainTextColor"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="326" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">consectetur adipiscing elit</text>
      <text :fill="styles.contentMainTextColor"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="339" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">sed do eiusmod tempor</text>
      <text :fill="styles.contentMainTextColor"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="353" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">incididunt ut link color et</text>
      <text :fill="styles.contentLinkTextColor.default"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="366" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">Read More... (Default)</text>
      <text :fill="styles.contentLinkTextColor.hover"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" y="379" x="219" fill-opacity="null" stroke-opacity="null" stroke-width="0">Read More... (Hover)</text>


      <!-- Quote -->
      <rect :fill="styles.quoteBackgroundColor"
            stroke="#000" height="45" width="337" y="202" x="31" stroke-width="0"/>
      <line :stroke="styles.quoteBorderColor"
            stroke-width="3" stroke-linecap="null" stroke-linejoin="null" y2="249" x2="369" y1="248" x1="31" fill-opacity="null" stroke-opacity="null" fill="none"/>
      <line :stroke="styles.quoteBorderColor"
            stroke-width="3" stroke-linecap="null" stroke-linejoin="null" id="svg_50" y2="200" x2="369" y1="200" x1="31" fill-opacity="null" stroke-opacity="null" fill="none"/>
      <text :fill="styles.quoteTextColor"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="16" y="229" x="40" stroke-opacity="null" stroke-width="0" stroke="#000">Lorems Ipsum</text>
      <text :fill="styles.quoteLinkTextColor.default"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="16" y="229" x="220" stroke-opacity="null" stroke-width="0">Link</text>
      <text :fill="styles.quoteLinkTextColor.hover"
            stroke="#000" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="16"  y="229" x="265" stroke-opacity="null" stroke-width="0">Link Hover</text>
      

      <!-- Footer -->
      <rect :fill="styles.footerBackgroundColor" 
            stroke="#000" id="svg_51" height="100" width="398" y="400" x="1" stroke-width="0"/>
      <line :stroke="styles.footerBorderColor"
            stroke-width="3" stroke-linecap="null" stroke-linejoin="null" id="svg_53" y2="400" x2="399" y1="400" x1="1" fill-opacity="null" stroke-opacity="null" fill="none"/>
      <!-- Footer Text Content -->
      <text :fill="styles.footerTextColor"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="13" y="427" x="32" stroke-opacity="null" stroke-width="0" stroke="#000">Text Content</text>
      <text :fill="styles.footerTextColor"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="13" y="427" x="232" stroke-opacity="null" stroke-width="0" stroke="#000">Text Content</text>
      <text :fill="styles.footerTextColor"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_89" y="493" x="172" stroke-opacity="null" stroke-width="0" stroke="#000">Copyright</text>
      <!-- Footer Primary Links -->
      <text :fill="styles.footerPrimaryLinkTextColor.default"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="13" y="447" x="32" stroke-opacity="null" stroke-width="0" stroke="#000">Primary Link</text>
      <text :fill="styles.footerPrimaryLinkTextColor.hover"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="13" y="467" x="32" stroke-opacity="null" stroke-width="0" stroke="#000">Primary Link Hover</text>
      <!-- Footer Secondary Links -->
      <text :fill="styles.footerSecondaryLinkTextColor.default"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="13" y="447.333293" x="233" stroke-opacity="null" stroke-width="0" stroke="#000">Secondary Link</text>
      <text :fill="styles.footerSecondaryLinkTextColor.hover"
            xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="13" y="467" x="233" stroke-opacity="null" stroke-width="0" stroke="#000">Secondary Link Hover</text>

     </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'global-settings-preview',
  props: ['styles']
}
</script>

<style lang="scss">

</style>
