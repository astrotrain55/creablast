import smartgrid from 'smart-grid';

smartgrid('./src', {
  filename: '_smartgrid',
  outputStyle: 'scss',
  columns: 24,
  offset: '20px',
  mobileFirst: true,
  container: {
    maxWidth: '1000px',
    fields: '20px',
  },
  breakPoints: {},
  mixinNames: {
    size: 'col-size',
  },
  tab: '  ',
});
