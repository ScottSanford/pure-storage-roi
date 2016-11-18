angular.module('pureStorageApp')

.factory('TabData', function() {

  var Tabs = {}; 

      Tabs.customerSurvey = [
        {
          title: 'General', 
          categories: [
              {
                subTitle: "Across All Workloads",
                inputs: [
                  {
                    inputTitle: 'Minimum Year 1 Capacity Required (Effective TBs)',
                    type: 'number', 
                    value: null
                  },
                  {
                    inputTitle: 'Annual Storage Expansion Growth Rate (CAGR)',
                    type: 'text'
                  },
                  {
                    inputTitle: 'Factor in Thin Provisioning?',
                    type: 'boolean', 
                    value: true
                  }
                ]
              },
              {
                subTitle: "Workload Mix",
                inputs: [
                  {
                    inputTitle: 'Generic VSI',
                    type: 'number', 
                    value: null
                  },
                  {
                    inputTitle: 'SQL Server',
                    type: 'number'
                  },
                  {
                    inputTitle: 'VDI',
                    type: 'number', 
                    value: null
                  },
                  {
                    inputTitle: 'Oracle',
                    type: 'number', 
                    value: null
                  }
                ]
              }
          ]
        }, 
        {
          title: 'Configurations', 
          categories: [
              {
                subTitle: "Pure Configuration Inputs",
                inputs: [
                  {
                    inputTitle: 'Minimum Year 1 Capacity Required (Effective TBs)',
                    type: 'number', 
                    value: 100
                  },
                  {
                    inputTitle: 'FlashArray Generation in Use for TCO',
                    type: 'text', 
                    value: 'FlashArray//m'
                  },
                  {
                    inputTitle: 'Data Reduction',
                    type: 'number', 
                    value: 3.91
                  },
                  {
                    inputTitle: '# of Arrays (Quantity)',
                    type: 'number', 
                    value: 1
                  },
                  {
                    inputTitle: 'Closest Fit FlashArray Model',
                    type: 'text', 
                    value: '//m50'
                  },
                  {
                    inputTitle: 'Closest Fit Capacity Configuration',
                    type: 'text', 
                    value: '45TB (0TB Chassis + 0x11TB + 0x22TB + 1x45TB + x90TB)'
                  },
                  {
                    inputTitle: 'Year 1 Pure Storage (Effective TB)',
                    type: 'number', 
                    value: 102
                  },
                  {
                    inputTitle: 'Excess Capacity Purchased in Year 1 (above Minimum)',
                    type: 'number', 
                    value: 2
                  }
                ]
              }
          ]
        }, 
        {
          title: 'Costs', 
          categories: [
              {
                subTitle: "Costs",
                inputs: [
                  {
                    inputTitle: 'Net Solution HW/SW Price (CAPEX) - in FX',
                    type: 'number', 
                    value: 250000
                  },
                  {
                    inputTitle: 'Net 3-Yr Maintenance Price (OpEx) - in FX',
                    type: 'number', 
                    value: 100000
                  },
                  {
                    inputTitle: 'Total Initial Acquisition Costs - in FX',
                    type: 'number', 
                    value: 0
                  },
                  {
                    inputTitle: 'Implied Acquisition $/GB All-Inclusive - in FX',
                    type: 'number', 
                    value: 350000
                  }
                ]
              }
          ]
        }
      ];

  return Tabs;

});