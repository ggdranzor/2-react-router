import React from "react";
export default class Response extends React.Component {
  render() {


    console.log("featured");
    return (
      <div class="well well-lg">
         <div class = "row">
          <div class ="col-8">
            <div class ="row-1">
              <div class ="panel panel-primary">
                <div class="panel-heading">
                    DASHBOARD
                  </div>
                  <div class="panel-body">
                  <div class="table-hover">
                  <table class ="table">
                  <thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">PatientID</th>
  <th scope="col">Category</th>
  <th scope="col">Status</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>Otto</td>
  <td>@mdo</td>
</tr>
<tr>
  <th scope="row">2</th>
  <td>Jacob</td>
  <td>Thornton</td>
  <td>@fat</td>
</tr>
<tr>
  <th scope="row">3</th>
  <td>Larry</td>
  <td>the Bird</td>
  <td>@twitter</td>
</tr>
</tbody>
</table>
</div>
                  </div>
                </div>
              </div>
              </div>
              <div class ="col-4">
                <div class ="panel panel-primary">
                  <div class="panel-body">
                              Demographics

                    </div>
                </div>
              </div>

          </div>
      </div>
    );
  }
}
