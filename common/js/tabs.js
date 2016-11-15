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
        }, 
        {
          title: 'Pure Configuration'
        }, 
        {
          title: 'Disk/Retrofit'
        }
      ];

  return Tabs;

});