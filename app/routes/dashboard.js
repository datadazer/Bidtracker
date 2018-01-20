import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import XLSX from 'npm:xlsx';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  newBid: {},
  model() {
    return RSVP.hash({
      users: this.get('store').findAll('user'),
      bids: this.get('store').findAll('bid')
    });
  },
  uploadBid(bidJob, bidLocation, bidGrossProfit, bidDirectMargin) {
    if(bidJob != undefined) {
      let bid = this.get('store').createRecord('bid', {job: bidJob, location: bidLocation, grossProfit: bidGrossProfit, directMargin: bidDirectMargin});
      bid.save();
    }
  },
  actions: {
    uploadExcelFile(file) {
      // console.dir(file);
      // js-xlsx library example
      let _this = this;
      let workbook;
      let bidJob;
      let bidLocation;
      let bidDirectMargin;
      let bidGrossProfit;
      let rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
      let f = file;
      let reader = new FileReader();
      reader.onload = function(e) {
        let data = e.target.result;
        if(!rABS) data = new Uint8Array(data);
        workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
        // console.log(workbook);
        /* DO SOMETHING WITH workbook HERE */
        let first_sheet_name = workbook.SheetNames[0];
        let address_of_cell = 'C1';

        /* Get worksheet */
        let worksheet = workbook.Sheets[first_sheet_name];

        /* Find desired cell */
        bidJob = worksheet['C1'].v;
        bidLocation = worksheet['C2'].v + ' ' + worksheet['C3'].v;
        bidGrossProfit = Math.round(worksheet['D49'].v);
        bidDirectMargin = worksheet['O5'].v * 100;
        // _this.set('newBid', {job: bidJob, location: bidLocation})
        _this.uploadBid(bidJob, bidLocation, bidGrossProfit, bidDirectMargin);
        /* Get the value */
        // console.log(bidJob + ', ' + bidLocation);

      }
      if(rABS) reader.readAsBinaryString(f.blob); else reader.readAsArrayBuffer(f.blob);
      this.uploadBid();

      // get(this, 'uploadPhoto').perform(file);
    }
  }
});
