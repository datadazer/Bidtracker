import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import XLSX from 'npm:xlsx';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return RSVP.hash({
      users: this.get('store').findAll('user'),
      bids: this.get('store').findAll('bid')
    });
  },
  actions: {
    uploadExcelFile(file) {
      // console.dir(file);
      // js-xlsx library example
      var workbook;
      var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
      var f = file;
      var reader = new FileReader();
      reader.onload = function(e) {
        var data = e.target.result;
        if(!rABS) data = new Uint8Array(data);
        workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
        console.log(workbook);
        /* DO SOMETHING WITH workbook HERE */

        var first_sheet_name = workbook.SheetNames[0];
        var address_of_cell = 'C1';

        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];

        /* Find desired cell */
        var desired_cell = worksheet[address_of_cell];

        /* Get the value */
        var desired_value = (desired_cell ? desired_cell.v : undefined);
        console.log(desired_value);

      };
      if(rABS) reader.readAsBinaryString(f.blob); else reader.readAsArrayBuffer(f.blob);

      // get(this, 'uploadPhoto').perform(file);
    }
  }
});
