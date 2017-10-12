export default {
  type: 'footer',
  label: 'Footer',
  groups: [
    {
      // id: Math.random().toString(36).substr(2),
      label: 'General',
      settings: [
        // 'containerMinHeight',
        'containerBackgroundColor',
        'colorTextColor'
      ]
    },
    {
      // id: Math.random().toString(36).substr(2),
      label: 'More Settings (Duplicated)',
      settings: [
        // 'containerMinHeight',
        'containerBackgroundColor',
        'colorTextColor'
      ]
    }
  ],

  settings: {
    // supported options:
    // min: 0,
    // max: 100,
    // prefix: '',
    // suffix: '',
    // 'containerMinHeight': {
    //   ui: 'slider',
    //   property: ['min-height'],
    //   value: '0',
    //   suffix: 'vh',
    //   min: '0',
    //   max: 100,
    //   label: 'Header Min Height',
    //   action: 'header1UpdateMinHeight'
    // },

    'containerBackgroundColor': {
      ui: 'color-picker',
      type: 'css',
      property: 'background-color',
      value: '#21222B',
      label: 'Header Background Color',
      selector: 'footer'
    },
    'colorTextColor': {
      ui: 'color-picker',
      type: 'css',
      property: 'color',
      value: '#ffffff',
      label: 'Header Text Color',
      selector: 'footer p'
    }
  }
}
