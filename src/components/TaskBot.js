import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Navigate } from 'react-router-dom';

const theme = {
  background: '#ffffff',
  headerBgColor: '#ecb4ec', 
  headerFontSize: '20px',
  botBubbleColor: '#ffffff',
  headerFontColor: '#ffffff',
  botFontColor: '#000000',
  userBubbleColor: '#FF4B90', 
  userFontColor: '#000000',
};

const steps = [
    {
      id: '0',
      message: 'Hey there! 👋 I\'m TaskBot. What\'s your name?',
      trigger: 'get_name',
    },
    {
      id: 'get_name',
      user: true,
      trigger: 'greet_user',
    },
    {
      id: 'greet_user',
      message: 'Nice to meet you, {previousValue}! Here are a few things I can help you with:',
      trigger: 'options_list',
    },
    {
      id: 'options_list',
      options: [
        { value: 'tasks', label: 'Explore Tasks', trigger: 'explore_tasks' },
        { value: 'hire', label: 'Hire a TaskRunner', trigger: 'hire_taskrunner' },
        { value: 'faq', label: 'FAQs', trigger: 'faq' },
      ],
    },
    {
        id: 'explore_tasks',
        options: [
          { value: 'moving_services', label: 'Moving Services', trigger: 'moving_services_options' },
          { value: 'virtual_online_tasks', label: 'Virtual and Online Tasks', trigger: 'virtual_online_tasks_options' },
          { value: 'baby_prep', label: 'Baby Prep', trigger: 'baby_prep_options' },
          { value: 'cleaning', label: 'Cleaning', trigger: 'cleaning_options' },
          { value: 'pet_care', label: 'Pet Care', trigger: 'pet_care_options' },
          { value: 'shopping_delivery', label: 'Shopping & Delivery', trigger: 'shopping_delivery_options' },
        ],
    },
    
     {
        id: 'moving_services_options',
        options: [
          { value: 'unpacking_services', label: 'Unpacking Services', trigger: 'unpacking_services_details' },
          { value: 'heavy_lifting', label: 'Heavy Lifting', trigger: 'heavy_lifting_details' },
          { value: 'junk_pickup', label: 'Junk Pickup', trigger: 'junk_pickup_details' },
          { value: 'furniture_movers', label: 'Furniture Movers', trigger: 'furniture_movers_details' },
          { value: 'one_item_movers', label: 'One Item Movers', trigger: 'one_item_movers_details' },
          { value: 'storage_unit_moving', label: 'Storage Unit Moving', trigger: 'storage_unit_moving_details' },
          { value: 'couch_removal', label: 'Couch Removal', trigger: 'couch_removal_details' },
          { value: 'mattress_removal', label: 'Mattress Pick-Up & Removal', trigger: 'mattress_removal_details' },
          { value: 'furniture_removal', label: 'Furniture Removal', trigger: 'furniture_removal_details' },
          { value: 'appliance_removal', label: 'Appliance Removal', trigger: 'appliance_removal_details' },
          { value: 'rearrange_furniture', label: 'Rearrange Furniture', trigger: 'rearrange_furniture_details' },
          { value: 'in_home_furniture_movers', label: 'In-Home Furniture Movers', trigger: 'in_home_furniture_movers_details' },
        ],
      },
      
      {
        id: 'virtual_online_tasks_options',
        options: [
          { value: 'organization', label: 'Organization', trigger: 'organization_details' },
          { value: 'data_entry', label: 'Data Entry', trigger: 'data_entry_details' },
          { value: 'computer_help', label: 'Computer Help', trigger: 'computer_help_details' },
        ],
      },
      
      {
        id: 'baby_prep_options',
        options: [
          { value: 'organize_room', label: 'Organize a Room', trigger: 'organize_room_details' },
          { value: 'painting', label: 'Painting', trigger: 'painting_details' },
          { value: 'smart_home_installation', label: 'Smart Home Installation', trigger: 'smart_home_installation_details' },
        ],
      },
      
      {
        id: 'cleaning_options',
        options: [
          { value: 'disinfecting_services', label: 'Disinfecting Services', trigger: 'disinfecting_services_details' },
          { value: 'move_in_cleaning', label: 'Move In Cleaning', trigger: 'move_in_cleaning_details' },
          { value: 'move_out_cleaning', label: 'Move Out Cleaning', trigger: 'move_out_cleaning_details' },
          { value: 'vacation_rental_cleaning', label: 'Vacation Rental Cleaning', trigger: 'vacation_rental_cleaning_details' },
          { value: 'garage_cleaning', label: 'Garage Cleaning', trigger: 'garage_cleaning_details' },
          { value: 'car_washing', label: 'Car Washing', trigger: 'car_washing_details' },
          { value: 'laundry_help', label: 'Laundry Help', trigger: 'laundry_help_details' },
        ],
      },
      
      {
        id: 'pet_care_options',
        options: [
          { value: 'dog_walking', label: 'Dog Walking', trigger: 'dog_walking_details' },
          { value: 'pet_sitting', label: 'Pet Sitting', trigger: 'pet_sitting_details' },
          { value: 'pet_grooming', label: 'Pet Grooming', trigger: 'pet_grooming_details' },
        ],
      },
      
      {
        id: 'shopping_delivery_options',
        options: [
          { value: 'special_requests', label: 'Special Requests', trigger: 'special_requests_details' },
          { value: 'bulk_shopping', label: 'Bulk Shopping', trigger: 'bulk_shopping_details' },
          { value: 'food_delivery', label: 'Food Delivery', trigger: 'food_delivery_details' },
          { value: 'contactless_delivery', label: 'Contactless Delivery', trigger: 'contactless_delivery_details' },
        ],
      },

      {
        id: 'unpacking_services_details',
        message: 'Unpacking Services: Professional assistance with unpacking boxes and setting up your new space.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'heavy_lifting_details',
        message: 'Heavy Lifting: Get help with heavy lifting tasks such as moving furniture or large items.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'junk_pickup_details',
        message: 'Junk Pickup: Removal and disposal of unwanted items or junk from your premises.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'furniture_movers_details',
        message: 'Furniture Movers: Professional movers to assist with transporting and moving furniture.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'one_item_movers_details',
        message: 'One Item Movers: Specialized service for moving single items or small loads.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'storage_unit_moving_details',
        message: 'Storage Unit Moving: Assistance with moving items in and out of storage units.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'couch_removal_details',
        message: 'Couch Removal: Removal and disposal of old or unwanted couches.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'mattress_removal_details',
        message: 'Mattress Pick-Up & Removal: Removal and disposal of old mattresses.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'furniture_removal_details',
        message: 'Furniture Removal: Professional removal of unwanted furniture items.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'appliance_removal_details',
        message: 'Appliance Removal: Removal and disposal of old appliances such as refrigerators, washers, or dryers.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'rearrange_furniture_details',
        message: 'Rearrange Furniture: Assistance with rearranging furniture for better space utilization or aesthetic purposes.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'in_home_furniture_movers_details',
        message: 'In-Home Furniture Movers: Professional movers to assist with moving furniture within your home.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'organization_details',
        message: 'Organization: Assistance with organizing your space, decluttering, and maximizing efficiency.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'data_entry_details',
        message: 'Data Entry: Professional data entry services to help with organizing and managing data.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'computer_help_details',
        message: 'Computer Help: Technical assistance and troubleshooting for computer-related issues.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'organize_room_details',
        message: 'Organize a Room: Get help organizing and arranging a room for your baby, ensuring safety and functionality.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'painting_details',
        message: 'Painting: Professional painting services for nurseries or baby rooms.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'toy_assembly_service_details',
        message: 'Toy Assembly Service: Assembly of baby toys and equipment for your convenience.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'smart_home_installation_details',
        message: 'Smart Home Installation: Installation and setup of smart home devices for baby monitoring or convenience.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'disinfecting_services_details',
        message: 'Disinfecting Services: Thorough cleaning and disinfection of your space to maintain hygiene and safety standards.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'move_in_cleaning_details',
        message: 'Move In Cleaning: Deep cleaning services for new homes or apartments before moving in.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'move_out_cleaning_details',
        message: 'Move Out Cleaning: Cleaning services to prepare your old home for moving out or handover.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'vacation_rental_cleaning_details',
        message: 'Vacation Rental Cleaning: Cleaning and preparation services for vacation rental properties between guests.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'carpet_cleaning_service_details',
        message: 'Carpet Cleaning Service: Professional carpet cleaning to refresh and maintain the appearance of your carpets.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'garage_cleaning_details',
        message: 'Garage Cleaning: Cleaning and organization services for your garage space.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'car_washing_details',
        message: 'Car Washing: Professional car washing and detailing services for your vehicle.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'laundry_help_details',
        message: 'Laundry Help: Assistance with laundry tasks including washing, folding, and ironing clothes.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'one_time_cleaning_services_details',
        message: 'One Time Cleaning Services: Customized cleaning services for one-time or occasional needs.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'dog_walking_details',
        message: 'Dog Walking: Professional dog walking services to ensure your pet gets the exercise they need.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'pet_sitting_details',
        message: 'Pet Sitting: Reliable pet sitting services to care for your pets while you\'re away.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'pet_grooming_details',
        message: 'Pet Grooming: Grooming services to keep your pet clean, healthy, and looking their best.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'special_requests_details',
        message: 'Special Requests: Assistance with any special shopping or delivery requests you may have.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'bulk_shopping_details',
        message: 'Bulk Shopping: Shopping assistance for buying items in bulk quantities.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'food_delivery_details',
        message: 'Food Delivery: Delivery services for ordering food from your favorite restaurants.',
        trigger: 'explore_more_tasks',
      },
      
      {
        id: 'contactless_delivery_details',
        message: 'Contactless Delivery: Safe and contactless delivery options for your packages or groceries.',
        trigger: 'explore_more_tasks',
      },
         
      {
        id: 'explore_more_tasks',
        options: [
          { value: 'yes', label: 'Explore more tasks', trigger: 'explore_tasks' },
          { value: 'no', label: 'No thanks, I\'m good', trigger: 'thank_you' },
        ],
      },

    {
        id: 'thank_you',
        message: 'Thank you for choosing TaskBot! Have a fantastic day!',
        trigger: 'options_list',
    },

     {
        id: 'hire_taskrunner',
        message: 'Hire a TaskRunner',
        trigger: 'redirect_to_hire',
      },
      {
        id: 'redirect_to_hire',
        component: <Navigate to="/services" />,
        trigger: 'options_list',
      },

    {
        id: 'faq',
        message: 'Here are some frequently asked questions:',
        trigger: 'faq_options',
    },

    {
      id: 'faq_options',
      options: [
        { value: 'custom', label: 'Custom Tasks', trigger: 'custom_tasks' },
        { value: 'cancel', label: 'Cancel Policy', trigger: 'cancel_policy' },
        { value: 'contact', label: 'Contact Information', trigger: 'contact_info' },
      ],
    },
    {
      id: 'custom_tasks',
      message: 'Unfortunately we do not take up custom tasks right now.',
      trigger: 'explore_more_faqs',
    },
    {
      id: 'cancel_policy',
      message: 'Once the runner is assigned you cannot cancel the task.',
      trigger: 'explore_more_faqs',
    },
    {
      id: 'contact_info',
      message: 'Need to get in touch? Feel free to email us at contactus.taskrunner@gmail.com or call 1-800-TASKRUN.',
      trigger: 'explore_more_faqs',
    },
    {
        id: 'explore_more_faqs',
        options: [
          { value: 'yes', label: 'Explore more FAQs', trigger: 'faq_options' },
          { value: 'no', label: 'No thanks, I\'m good', trigger: 'thank_you' },
        ],
    },

    {
      id: 'error',
      message: 'Oops! Something went wrong. Please try again later.',
      trigger: 'options_list',
    },

];
  

const config = {
  botAvatar: './images/logo-transparent.png', 
  floating: true,
};

function TaskBot() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="TaskBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}

export default TaskBot;