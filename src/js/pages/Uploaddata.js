import React from "react";
export default class Uploaddata extends React.Component {
  render() {
    console.log("Upload Data");
    return (
      <div class="well well-lg">
         <div class = "row">
          <div class ="col-8">
            <div class ="row-1">
              <div class ="panel panel-primary">
                <div class="panel-heading">
                    Medication
                  </div>
                  <div class="panel-body">
                      Panel content
                        <button type="button" class="btn">Upload Data</button>
                  </div>
                </div>
              </div>
            <div class ="row-2">
              <div class ="panel panel-primary">
                <div class="panel-heading">
                 Lifestyle
                </div>
                <div class="panel-body">
                 Panel Content
              <button type="button" class="btn">Upload Data</button>
                </div>
              </div>
            </div>
            <div class ="row-3">
              <div class ="panel panel-primary">
                <div class="panel-heading">
                  Follow-Ups
                </div>
                <div class="panel-body">
                            Panel content
                              <button type="button" class="btn">Upload Data</button>
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
