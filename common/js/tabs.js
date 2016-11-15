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
                    type: 'number'
                  },
                  {
                    inputTitle: 'SQL Server',
                    type: 'number'
                  },
                  {
                    inputTitle: 'VDI',
                    type: 'number'
                  }
                ]
              }
          ]
        }, 
        {
          title: 'Pure Configuration', 
          categories: [
              {
                subTitle: "Pure Configuration Inputs",
                inputs: [
                  {
                    inputTitle: 'Minimum Year 1 Capacity Required (Effective TBs)',
                    type: 'number', 
                    value: null
                  },
                  {
                    inputTitle: 'FlashArray Generation in Use for TCO',
                    type: 'text'
                  },
                  {
                    inputTitle: 'Data Reduction in Use for TCO (X:1) Given Workload Mix (without Thin Prov.)',
                    type: 'text'
                  },
                  {
                    inputTitle: '# of Arrays (Quantity)',
                    type: 'text'
                  }
                ]
              },
              {
                subTitle: "Pure Solution Costs",
                inputs: [
                  {
                    inputTitle: 'Include Forever Flash?',
                    type: 'boolean'
                  },
                  {
                    inputTitle: 'Average UpgradeFlex CAPEX as % of Initial Purchase',
                    type: 'number'
                  }
                ]
              }
          ]
        }, 
        {
          title: 'Disk/Retrofit', 
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
                    type: 'boolean'
                  }
                ]
              },
              {
                subTitle: "Workload Mix",
                inputs: [
                  {
                    inputTitle: 'Generic VSI',
                    type: 'number'
                  },
                  {
                    inputTitle: 'SQL Server',
                    type: 'number'
                  },
                  {
                    inputTitle: 'VDI',
                    type: 'number'
                  }
                ]
              }
          ]
        }
      ];

  return Tabs;

});