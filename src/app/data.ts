interface TopLayoutDataItem {
    title: string;
    values: string[];
    layoutType: 'single-column' | 'two-column';
  }
  
  export const topLayoutData: TopLayoutDataItem[] = [
    {
      title: "Anchor Details",
      values: [
        "Intelligent Pvt Ltd",
        "Shreyansh",
        "01 Jan, 2024",
        "Ripplr_234567",
        "+91 95647 76550",
        "Electronics | Mobile Phones"
      ],
      layoutType: 'two-column'
    },
    {
      title: "QuID POC",
      values: [
        "Naveen",
        "Rahul Ramesh"
      ],
      layoutType: 'single-column'
    },
    {
      title: "Address",
      values: [
        "QuiD Pvt Ltd, # 3 floor, Kris..",
        "Bangalore | Karnataka",
        "560090"
      ],
      layoutType: 'single-column'
    }

   
  ];


  interface BottomLayoutDataItem {
    title: string;
    values: { label: string, value: string }[];
    layoutType: 'single-column' | 'two-column';
  }
  
  export const bottomLayoutData = [
    {
      title: "Brands",
      values: [
        { label: "Icon1", value: "/image 33.png" },
        { label: "Icon2", value: "/image 35.png" },
        { label: "Icon3", value: "/image 36.png" }
      ],
      layoutType: 'single-column'
    },
    {
      title: "Onboarding Details",
      values: [
        { label: "No. of ONBOARDING", value: "50" },
        { label: "ACTIVATED", value: "50" },
        { label: "TRANSACTING", value: "50" }
      ],
      layoutType: 'single-column'
    },
    {
      title: "Transaction Details",
      values: [
        { label: "No. of transactions", value: "50" },
        { label: "P.O.S.", value: "₹5,00,000" },
        { label: "TOTAL DISBURSEMENTS", value: "₹5,00,000" },
        { label: "COLLECTIONS", value: "55" }
      ],

    
      layoutType: 'single-column'
    },
    {
      title: "PROGRAM SIZE",
      values: [
        { label: 'Credit Limit', value: '₹1,40,000 / ₹2,00,000' },
        { label: 'Subvention by anchor', value: '0' },
        { label: 'Platform fees', value: '0' },
        { label: 'Interest Rate for Retailers', value: '22-24' },
        { label: 'Penal Interest', value: '0' },
        { label: 'Processing fee', value: '0' },
        { label: 'Credit Tenure', value: '60' },
        { label: 'Subverted days', value: '15' },
        { label: 'Interest bearing days', value: '45' },
      ],
      layoutType: 'three-column'
    }

  ];


  export const ProgramSize=[
    {
        title:"ProgramSize",
        values: [
            { label: 'Credit Limit', value: '₹1,40,000 / ₹2,00,000' },
            { label: 'Subvention by anchor', value: '0' },
            { label: 'Platform fees', value: '0' },
            { label: 'Interest Rate for Retailers', value: '22-24' },
            { label: 'Penal Interest', value: '0' },
            { label: 'Processing fee', value: '0' },
            { label: 'Credit Tenure', value: '60' },
            { label: 'Subverted days', value: '15' },
            { label: 'Interest bearing days', value: '45' },
          ],
          layoutType: 'three-column'
        }


    
  ]

