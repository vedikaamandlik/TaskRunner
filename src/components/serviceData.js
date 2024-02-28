const serviceData = [
    {
      category: 'Shopping + Delivery',
      services: [
        {
          name: 'Special Requests',
          description: 'Fulfill your unique shopping needs with our special request service.',
          bookingForm: [
            { label: 'Item Description', type: 'text', name: 'itemDescription', required: true },
            { label: 'Delivery Address', type: 'text', name: 'deliveryAddress', required: true },
            { label: 'Preferred Delivery Date', type: 'date', name: 'preferredDeliveryDate', required: false },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Bulk Shopping',
          description: 'Save time and money by ordering in bulk with our bulk shopping service.',
          bookingForm: [
            { label: 'List of Items', type: 'textarea', name: 'itemList', required: true },
            { label: 'Preferred Stores', type: 'text', name: 'preferredStores', required: false },
            { label: 'Delivery Address', type: 'text', name: 'deliveryAddress', required: true },
            { label: 'Special Instructions', type: 'textarea', name: 'specialInstructions', required: false },
          ],
        },
        {
          name: 'Breakfast Delivery',
          description: 'Start your day right with our convenient breakfast delivery service.',
          bookingForm: [
            { label: 'Preferred Breakfast Items', type: 'text', name: 'preferredItems', required: true },
            { label: 'Delivery Time', type: 'text', name: 'deliveryTime', required: true },
            { label: 'Special Instructions', type: 'textarea', name: 'specialInstructions', required: false },
          ],
        },
        {
          name: 'Coffee Delivery',
          description: 'Enjoy your favorite coffee delivered to your doorstep with our coffee delivery service.',
          bookingForm: [
            { label: 'Coffee Type', type: 'text', name: 'coffeeType', required: true },
            { label: 'Size (e.g., Small, Medium, Large)', type: 'text', name: 'coffeeSize', required: true },
            { label: 'Delivery Address', type: 'text', name: 'deliveryAddress', required: true },
            { label: 'Additional Preferences', type: 'textarea', name: 'additionalPreferences', required: false },
          ],
        },
        {
          name: 'Contactless Delivery',
          description: 'Prioritize safety with our contactless delivery option for all your items.',
          bookingForm: [
            { label: 'Delivery Address', type: 'text', name: 'deliveryAddress', required: true },
            { label: 'Preferred Delivery Time', type: 'time', name: 'preferredDeliveryTime', required: false },
            { label: 'Special Instructions', type: 'textarea', name: 'specialInstructions', required: false },
          ],
        },
        {
          name: 'Pet Food Delivery',
          description: 'Ensure your pets are well-fed with our reliable pet food delivery service.',
          bookingForm: [
            { label: 'Pet Type', type: 'text', name: 'petType', required: true },
            { label: 'Quantity (lbs)', type: 'number', name: 'quantity', required: true },
            { label: 'Preferred Brand', type: 'text', name: 'preferredBrand', required: false },
            { label: 'Delivery Instructions', type: 'textarea', name: 'deliveryInstructions', required: false },
          ],
        },
        {
          name: 'Baby Food Delivery',
          description: 'Conveniently receive baby food at your doorstep with our baby food delivery service.',
          bookingForm: [
            { label: 'Baby Age', type: 'text', name: 'babyAge', required: true },
            { label: 'Preferred Flavors', type: 'text', name: 'preferredFlavors', required: false },
            { label: 'Special Dietary Requirements', type: 'text', name: 'dietaryRequirements', required: false },
            { label: 'Delivery Schedule Preferences', type: 'text', name: 'deliverySchedule', required: false },
          ],
        },
        {
          name: 'Return Items',
          description: 'Effortlessly return items with our hassle-free return service.',
          bookingForm: [
            { label: 'Order Number', type: 'text', name: 'orderNumber', required: true },
            { label: 'Reason for Return', type: 'text', name: 'reasonForReturn', required: true },
            { label: 'Item Condition', type: 'text', name: 'itemCondition', required: true },
            { label: 'Preferred Return Method', type: 'text', name: 'returnMethod', required: false },
          ],
        },
        {
          name: 'Wait for Delivery',
          description: 'Let us handle the wait for your deliveries, saving you time and effort.',
          bookingForm: [
            { label: 'Delivery Date and Time', type: 'datetime-local', name: 'deliveryDateTime', required: true },
            { label: 'Delivery Details', type: 'text', name: 'deliveryDetails', required: true },
            { label: 'Additional Instructions', type: 'text', name: 'additionalInstructions', required: false },
          ],
        }      
      ],
      image: '/images/shopping_delivery.jpg',
      icon: '/images/delivery_icon.png',
    },
    {
      category: 'Pet Care',
      services: [
        {
          name: 'Dog Walking',
          description: 'Keep your pets looking and feeling their best with our professional dog walking services.',
          bookingForm: [
            { label: 'Dog Name', type: 'text', name: 'dogName', required: true },
            { label: 'Dog Breed', type: 'text', name: 'dogBreed', required: true },
            { label: 'Preferred Walking Time', type: 'time', name: 'preferredWalkingTime', required: true },
            { label: 'Duration (in minutes)', type: 'number', name: 'durationInMinutes', required: true },
            { label: 'Special Instructions', type: 'text', name: 'specialInstructions', required: false },
          ],
        },
        {
          name: 'Pet Sitting',
          description: 'Keep your pets looking and feeling their best with our professional pet sitting services.',
          bookingForm: [
            { label: 'Pet Type', type: 'text', name: 'petType', required: true },
            { label: 'Number of Pets', type: 'number', name: 'numberOfPets', required: true },
            { label: 'Preferred Duration', type: 'text', name: 'preferredDuration', required: true },
            { label: 'Special Instructions', type: 'text', name: 'specialInstructions', required: false },
          ],
        },
        {
          name: 'Pet Grooming',
          description: 'Keep your pets looking and feeling their best with our professional pet grooming services.',
          bookingForm: [
            { label: 'Pet Type', type: 'text', name: 'petType', required: true },
            { label: 'Grooming Package', type: 'text', name: 'groomingPackage', required: true },
            { label: 'Preferred Date', type: 'date', name: 'preferredDate', required: true },
            { label: 'Special Requests', type: 'text', name: 'specialRequests', required: false },
          ],
        }      
      ],
      image: '/images/pet_care.jpg',
      icon: '/images/pet_icon.png',
    },
    {
      category: 'Cleaning',
      services: [
        {
          name: 'Disinfecting Services',
          description: 'Create a clean and sanitized environment with our thorough disinfecting services.',
          bookingForm: [
            { label: 'Type of Space', type: 'text', name: 'spaceType', required: true },
            { label: 'Square Footage', type: 'number', name: 'squareFootage', required: true },
            { label: 'Preferred Date', type: 'date', name: 'preferredDate', required: true },
            { label: 'Additional Instructions', type: 'text', name: 'additionalInstructions', required: false },
          ],
        },
        {
          name: 'Move In Cleaning',
          description: 'Start fresh in your new home with our specialized move-in cleaning services.',
          bookingForm: [
            { label: 'Number of Bedrooms', type: 'number', name: 'numBedrooms', required: true },
            { label: 'Number of Bathrooms', type: 'number', name: 'numBathrooms', required: true },
            { label: 'Preferred Date', type: 'date', name: 'preferredDate', required: true },
            { label: 'Additional Services', type: 'text', name: 'additionalServices', required: false },
          ],
        },
        {
          name: 'Move Out Cleaning',
          description: 'Leave your old space spotless with our efficient move-out cleaning services.',
          bookingForm: [
            { label: 'Number of Rooms', type: 'number', name: 'numRooms', required: true },
            { label: 'Move Out Date', type: 'date', name: 'moveOutDate', required: true },
            { label: 'Any Specific Areas to Focus On', type: 'text', name: 'specificAreas', required: false },
            { label: 'Cleaning Supplies Provided', type: 'checkbox', name: 'suppliesProvided', required: false },
          ],
        },
        {
          name: 'Vacation Rental Cleaning',
          description: 'Prepare your vacation rental for guests with our reliable cleaning services.',
          bookingForm: [
            { label: 'Number of Bedrooms', type: 'number', name: 'numBedrooms', required: true },
            { label: 'Number of Bathrooms', type: 'number', name: 'numBathrooms', required: true },
            { label: 'Check-in Date', type: 'date', name: 'checkInDate', required: true },
            { label: 'Additional Services Requested', type: 'textarea', name: 'additionalServices', required: false },
          ],
        },
        {
          name: 'Carpet Cleaning Service',
          description: 'Revitalize your carpets with our professional carpet cleaning service.',
          bookingForm: [
            { label: 'Number of Rooms', type: 'number', name: 'numRooms', required: true },
            { label: 'Carpet Material', type: 'text', name: 'carpetMaterial', required: true },
            { label: 'Preferred Date', type: 'date', name: 'preferredDate', required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Garage Cleaning',
          description: 'Organize and clean your garage space with our dedicated garage cleaning services.',
          bookingForm: [
            { label: 'Garage Size (sq. ft.)', type: 'number', name: 'garageSize', required: true },
            { label: 'Preferred Time', type: 'time', name: 'preferredTime', required: true },
            { label: 'Items to Focus On', type: 'text', name: 'itemsToFocusOn', required: false },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'One Time Cleaning Services',
          description: 'Get a thorough clean for special occasions with our one-time cleaning services.',
          bookingForm: [
            { label: 'Property Type', type: 'select', name: 'propertyType', options: ['House', 'Apartment', 'Office'], required: true },
            { label: 'Number of Rooms', type: 'number', name: 'numRooms', required: true },
            { label: 'Preferred Date', type: 'date', name: 'preferredDate', required: true },
            { label: 'Special Requests', type: 'textarea', name: 'specialRequests', required: false },
          ],
        },
        {
          name: 'Car Washing',
          description: 'Keep your vehicle looking its best with our convenient car washing services.',
          bookingForm: [
            { label: 'Vehicle Type', type: 'select', name: 'vehicleType', options: ['Sedan', 'SUV', 'Truck', 'Other'], required: true },
            { label: 'Preferred Service Type', type: 'radio', name: 'serviceType', options: ['Exterior Wash', 'Interior Cleaning', 'Full Service'], required: true },
            { label: 'Preferred Date', type: 'date', name: 'preferredDate', required: true },
            { label: 'Additional Instructions', type: 'textarea', name: 'additionalInstructions', required: false },
          ],
        },
        {
          name: 'Laundry Help',
          description: 'Get assistance with your laundry needs for a hassle-free experience.',
          bookingForm: [
            { label: 'Number of Loads', type: 'number', name: 'numLoads', required: true, min: 1 },
            { label: 'Preferred Detergent', type: 'text', name: 'preferredDetergent', required: false },
            { label: 'Special Instructions', type: 'textarea', name: 'specialInstructions', required: false },
            { label: 'Pickup/Drop-off Location', type: 'text', name: 'pickupLocation', required: true },
          ],
        },
      ],
      image: '/images/cleaning.jpeg',
      icon: '/images/cleaning_icon.png',
    },
    {
      category: 'Baby Prep',
      services: [
        {
          name: 'Organize a Room',
          description: 'Create a well-organized and functional space for your baby with our room organization service.',
          bookingForm: [
            { label: 'Room Size (sq. ft.)', type: 'number', name: 'roomSize', required: true, min: 1 },
            { label: 'Preferred Theme', type: 'text', name: 'preferredTheme', required: false },
            { label: 'Specific Requirements', type: 'textarea', name: 'specificRequirements', required: false },
          ],
        },
        {
          name: 'Painting',
          description: 'Personalize your baby\'s room with our professional painting services.',
          bookingForm: [
            { label: 'Number of Walls', type: 'number', name: 'numWalls', required: true, min: 1 },
            { label: 'Preferred Colors', type: 'text', name: 'preferredColors', required: true },
            { label: 'Design Ideas', type: 'textarea', name: 'designIdeas', required: false },
          ],
        },
        {
          name: 'Toy Assembly Service',
          description: 'Save time and effort with our toy assembly service for your baby\'s playthings.',
          bookingForm: [
            { label: 'Number of Toys', type: 'number', name: 'numToys', required: true, min: 1 },
            { label: 'Specific Toys', type: 'textarea', name: 'specificToys', required: true },
            { label: 'Assembly Deadline', type: 'date', name: 'assemblyDeadline', required: false },
          ],
        },
        {
          name: 'Smart Home Installation',
          description: 'Enhance the safety and convenience of your home with our smart home installation services.',
          bookingForm: [
            { label: 'Number of Devices', type: 'number', name: 'numDevices', required: true, min: 1 },
            { label: 'Preferred Smart Devices', type: 'text', name: 'preferredDevices', required: true },
            { label: 'Installation Location', type: 'text', name: 'installationLocation', required: true },
          ],
        },
        {
          name: 'Delivery',
          description: 'Efficiently receive baby essentials with our reliable delivery services.',
          bookingForm: [
            { label: 'Delivery Address', type: 'text', name: 'deliveryAddress', required: true },
            { label: 'Preferred Delivery Time', type: 'time', name: 'preferredDeliveryTime', required: false },
          ],
        },
        {
          name: 'Shopping',
          description: 'Get assistance with baby shopping to ensure you have everything you need.',
          bookingForm: [
            { label: 'Shopping List', type: 'textarea', name: 'shoppingList', required: true },
            { label: 'Budget', type: 'number', name: 'budget', required: true, min: 0 },
            { label: 'Preferred Stores', type: 'text', name: 'preferredStores', required: false },
          ],
        },
        {
          name: 'General Cleaning',
          description: 'Maintain a clean and safe environment for your baby with our general cleaning services.',
          bookingForm: [
            { label: 'Number of Rooms', type: 'number', name: 'numRooms', required: true, min: 1 },
            { label: 'Cleaning Frequency', type: 'select', name: 'cleaningFrequency', required: true, options: ['One-time', 'Weekly', 'Bi-weekly'] },
            { label: 'Specific Cleaning Areas', type: 'textarea', name: 'specificCleaningAreas', required: false },
          ],
        }
      ],
      image: '/images/baby_prep.jpg',
      icon: '/images/baby_icon.png',
    },
    {
      category: 'Virtual and Online Tasks',
      services: [
        {
          name: 'Organization',
          description: 'Enhance your productivity with our professional organization services for your virtual tasks.',
          bookingForm: [
            { label: 'Task Description', type: 'textarea', name: 'taskDescription', required: true },
            { label: 'Organization Method', type: 'text', name: 'organizationMethod', required: true },
            { label: 'Deadline', type: 'date', name: 'deadline', required: false },
          ],
        },
        {
          name: 'Data Entry',
          description: 'Accurately manage and organize data with our efficient data entry services.',
          bookingForm: [
            { label: 'Type of Data', type: 'text', name: 'typeOfData', required: true },
            { label: 'Data Source', type: 'text', name: 'dataSource', required: true },
            { label: 'Data Format', type: 'text', name: 'dataFormat', required: false },
            { label: 'Volume of Data', type: 'number', name: 'volumeOfData', required: true, min: 1 },
          ],
        },
        {
          name: 'Computer Help',
          description: 'Resolve computer issues and optimize performance with our computer help services.',
          bookingForm: [
            { label: 'Computer Problem Description', type: 'textarea', name: 'problemDescription', required: true },
            { label: 'Computer Type', type: 'text', name: 'computerType', required: true },
            { label: 'Operating System', type: 'text', name: 'operatingSystem', required: true },
            { label: 'Preferred Assistance Method', type: 'select', name: 'assistanceMethod', required: true, options: ['Remote Assistance', 'On-site Assistance'] },
          ],
        }
      ],
      image: '/images/virtual_tasks.jpeg',
      icon: '/images/online_icon.png',
    },
    {
      category: 'Moving Services',
      services: [
        {
          name: 'Unpacking Services',
          description: 'Effortlessly settle into your new home with our reliable unpacking services.',
          bookingForm: [
            { label: 'Moving Date', type: 'date', name: 'movingDate', required: true },
            { label: 'Number of Boxes', type: 'number', name: 'numberOfBoxes', required: true, min: 1 },
            { label: 'Preferred Unpacking Areas', type: 'text', name: 'preferredAreas', required: true },
            { label: 'Special Instructions', type: 'textarea', name: 'specialInstructions', required: false },
          ],
        },
        {
          name: 'Heavy Lifting',
          description: 'Leave the heavy lifting to us with our skilled team for all your lifting needs.',
          bookingForm: [
            { label: 'Type of Items', type: 'text', name: 'itemType', required: true },
            { label: 'Weight of Items (in pounds)', type: 'number', name: 'itemWeight', required: true, min: 1 },
            { label: 'Number of Items', type: 'number', name: 'numberOfItems', required: true, min: 1 },
            { label: 'Preferred Lifting Date', type: 'date', name: 'preferredDate', required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Local Movers',
          description: 'Experience a smooth local move with our expert local movers.',
          bookingForm: [
            { label: 'Moving Date', type: 'date', name: 'movingDate', required: true },
            { label: 'Current Address', type: 'text', name: 'currentAddress', required: true },
            { label: 'Destination Address', type: 'text', name: 'destinationAddress', required: true },
            { label: 'Number of Rooms', type: 'number', name: 'numberOfRooms', required: true, min: 1 },
            { label: 'Additional Services (Optional)', type: 'checkbox', name: 'additionalServices', options: ['Packing', 'Unpacking', 'Assembly'], required: false },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Junk Pickup',
          description: 'Dispose of unwanted items with our convenient junk pickup services.',
          bookingForm: [
            { label: 'Pickup Date', type: 'date', name: 'pickupDate', required: true },
            { label: 'Pickup Address', type: 'text', name: 'pickupAddress', required: true },
            { label: 'Types of Items', type: 'checkbox', name: 'itemTypes', options: ['Furniture', 'Electronics', 'Appliances', 'Other'], required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Furniture Movers',
          description: 'Transport your furniture safely with our professional furniture moving services.',
          bookingForm: [
            { label: 'Moving Date', type: 'date', name: 'movingDate', required: true },
            { label: 'Current Address', type: 'text', name: 'currentAddress', required: true },
            { label: 'New Address', type: 'text', name: 'newAddress', required: true },
            { label: 'List of Furniture', type: 'textarea', name: 'furnitureList', required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'One Item Movers',
          description: 'Move single items efficiently with our specialized one-item moving services.',
          bookingForm: [
            { label: 'Pickup Date', type: 'date', name: 'pickupDate', required: true },
            { label: 'Pickup Address', type: 'text', name: 'pickupAddress', required: true },
            { label: 'Delivery Address', type: 'text', name: 'deliveryAddress', required: true },
            { label: 'Item Description', type: 'text', name: 'itemDescription', required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Storage Unit Moving',
          description: 'Facilitate a seamless move to or from a storage unit with our specialized services.',
          bookingForm: [
            { label: 'Move Date', type: 'date', name: 'moveDate', required: true },
            { label: 'Storage Unit Location', type: 'text', name: 'storageUnitLocation', required: true },
            { label: 'Destination Address', type: 'text', name: 'destinationAddress', required: true },
            { label: 'Number of Items', type: 'number', name: 'numberOfItems', required: true },
            { label: 'Special Handling Instructions', type: 'textarea', name: 'specialInstructions', required: false },
          ],
        },
        {
          name: 'Couch Removal',
          description: 'Dispose of old or unwanted couches with our reliable removal services.',
          bookingForm: [
            { label: 'Pickup Date', type: 'date', name: 'pickupDate', required: true },
            { label: 'Couch Description', type: 'text', name: 'couchDescription', required: true },
            { label: 'Address for Pickup', type: 'text', name: 'pickupAddress', required: true },
            { label: 'Contact Phone Number', type: 'tel', name: 'contactPhoneNumber', required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Mattress Pick-Up & Removal',
          description: 'Dispose of old mattresses with our convenient pick-up and removal services.',
          bookingForm: [
            { label: 'Pickup Date', type: 'date', name: 'pickupDate', required: true },
            { label: 'Mattress Size', type: 'select', name: 'mattressSize', options: ['Twin', 'Full', 'Queen', 'King'], required: true },
            { label: 'Number of Mattresses', type: 'number', name: 'numberOfMattresses', required: true },
            { label: 'Address for Pickup', type: 'text', name: 'pickupAddress', required: true },
            { label: 'Contact Phone Number', type: 'tel', name: 'contactPhoneNumber', required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Furniture Removal',
          description: 'Clear out unwanted furniture with our efficient furniture removal services.',
          bookingForm: [
            { label: 'Type of Furniture', type: 'text', name: 'furnitureType', required: true },
            { label: 'Number of Items', type: 'number', name: 'numberOfItems', required: true },
            { label: 'Pickup Date', type: 'date', name: 'pickupDate', required: true },
            { label: 'Address for Pickup', type: 'text', name: 'pickupAddress', required: true },
            { label: 'Contact Phone Number', type: 'tel', name: 'contactPhoneNumber', required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Appliance Removal',
          description: 'Dispose of old appliances with our reliable appliance removal services.',
          bookingForm: [
            { label: 'Type of Appliance', type: 'text', name: 'applianceType', required: true },
            { label: 'Number of Appliances', type: 'number', name: 'numberOfAppliances', required: true },
            { label: 'Pickup Date', type: 'date', name: 'pickupDate', required: true },
            { label: 'Address for Pickup', type: 'text', name: 'pickupAddress', required: true },
            { label: 'Contact Phone Number', type: 'tel', name: 'contactPhoneNumber', required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Heavy Furniture Moving',
          description: 'Move large and heavy furniture items with ease using our specialized services.',
          bookingForm: [
            { label: 'Furniture Type', type: 'text', name: 'furnitureType', required: true },
            { label: 'Number of Items', type: 'number', name: 'numberOfItems', required: true },
            { label: 'Current Location', type: 'text', name: 'currentLocation', required: true },
            { label: 'Destination Location', type: 'text', name: 'destinationLocation', required: true },
            { label: 'Preferred Moving Date', type: 'date', name: 'preferredMovingDate', required: true },
            { label: 'Contact Email', type: 'email', name: 'contactEmail', required: true },
            { label: 'Additional Notes', type: 'textarea', name: 'additionalNotes', required: false },
          ],
        },
        {
          name: 'Rearrange Furniture',
          description: 'Refresh your living space by rearranging furniture with our skilled team.',
          bookingForm: [
            { label: 'Number of Rooms', type: 'number', name: 'numberOfRooms', required: true },
            { label: 'Furniture Items', type: 'text', name: 'furnitureItems', required: true },
            { label: 'Preferred Arrangement', type: 'textarea', name: 'preferredArrangement', required: false },
            { label: 'Contact Phone', type: 'tel', name: 'contactPhone', required: true },
            { label: 'Preferred Date and Time', type: 'datetime-local', name: 'preferredDateTime', required: true },
            { label: 'Additional Instructions', type: 'textarea', name: 'additionalInstructions', required: false },
          ],
        },
        {
          name: 'Full Service Help Moving',
          description: 'Experience a stress-free move with our comprehensive full-service moving assistance.',
          bookingForm: [
            { label: 'Moving From', type: 'text', name: 'movingFrom', required: true },
            { label: 'Moving To', type: 'text', name: 'movingTo', required: true },
            { label: 'Number of Rooms', type: 'number', name: 'numberOfRooms', required: true },
            { label: 'Move Date', type: 'date', name: 'moveDate', required: true },
            { label: 'Contact Phone', type: 'tel', name: 'contactPhone', required: true },
            { label: 'Additional Services', type: 'checkbox', name: 'additionalServices', options: ['Packing', 'Unpacking', 'Furniture Assembly'], required: false },
            { label: 'Special Items', type: 'textarea', name: 'specialItems', required: false },
            { label: 'Preferred Time', type: 'time', name: 'preferredTime', required: false },
            { label: 'Additional Instructions', type: 'textarea', name: 'additionalInstructions', required: false },
          ],
        },
        {
          name: 'In-Home Furniture Movers',
          description: 'Rearrange furniture within your home with our convenient in-home furniture moving services.',
          bookingForm: [
            { label: 'Current Room', type: 'text', name: 'currentRoom', required: true },
            { label: 'New Room', type: 'text', name: 'newRoom', required: true },
            { label: 'List of Furniture Items', type: 'textarea', name: 'furnitureList', required: true },
            { label: 'Preferred Time', type: 'time', name: 'preferredTime', required: false },
            { label: 'Additional Instructions', type: 'textarea', name: 'additionalInstructions', required: false },
          ],
        },
      ],
      image: '/images/moving.jpeg',
      icon: '/images/moving_icon.png',
    }
  ];

export default serviceData;