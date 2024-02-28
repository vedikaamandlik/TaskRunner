const bookingForms = {
    bulkShopping: [
        { label: 'List of Items', type: 'textarea', name: 'itemList', required: true },
        { label: 'Preferred Stores', type: 'text', name: 'preferredStores', required: false },
        { label: 'Delivery Address', type: 'text', name: 'deliveryAddress', required: true },
        { label: 'Special Instructions', type: 'textarea', name: 'specialInstructions', required: false },
    ],
    breakfastDelivery: [
        { label: 'Preferred Breakfast Items', type: 'text', name: 'preferredItems', required: true },
        { label: 'Delivery Time', type: 'text', name: 'deliveryTime', required: true },
        { label: 'Special Instructions', type: 'textarea', name: 'specialInstructions', required: false },
    ],
    coffeeDelivery :[
        { label: 'Coffee Type', type: 'text', name: 'coffeeType', required: true },
        { label: 'Size (e.g., Small, Medium, Large)', type: 'text', name: 'coffeeSize', required: true },
        { label: 'Delivery Address', type: 'text', name: 'deliveryAddress', required: true },
        { label: 'Additional Preferences', type: 'textarea', name: 'additionalPreferences', required: false },
    ],
    contactlessDelivery :[
        { label: 'Delivery Address', type: 'text', name: 'deliveryAddress', required: true },
        { label: 'Preferred Delivery Time', type: 'time', name: 'preferredDeliveryTime', required: false },
        { label: 'Special Instructions', type: 'textarea', name: 'specialInstructions', required: false },
    ],
    returnItems: [
        { label: 'Order Number', type: 'text', name: 'orderNumber', required: true },
        { label: 'Reason for Return', type: 'text', name: 'reasonForReturn', required: true },
        { label: 'Item Condition', type: 'text', name: 'itemCondition', required: true },
        { label: 'Preferred Return Method', type: 'text', name: 'returnMethod', required: false },
    ],
    waitForDelivery: [
        { label: 'Delivery Date and Time', type: 'datetime-local', name: 'deliveryDateTime', required: true },
        { label: 'Delivery Details', type: 'text', name: 'deliveryDetails', required: true },
        { label: 'Additional Instructions', type: 'text', name: 'additionalInstructions', required: false },
    ],
    
  };