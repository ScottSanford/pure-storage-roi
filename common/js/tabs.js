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
              }
          ]
        }, 
        {
          title: 'Disk/Retrofit', 
          categories: [
              {
                subTitle: "Disk/Retrofit Inputs",
                inputs: [
                  {
                    inputTitle: 'Minimum Year 1 Capacity Required (Effective TBs)',
                    type: 'number', 
                    value: null
                  },
                  {
                    inputTitle: 'Year 1 Purchased Effective Capacity (Effective TBs) - If Overprovisioned',
                    type: 'text'
                  },
                  {
                    inputTitle: 'Excess Capacity Purchased in Year 1 (above Minimum)',
                    type: 'boolean'
                  }
                ]
              }
          ]
        }
      ];

  return Tabs;

});