import { reactive } from "vue";

export const store = reactive({

    navLinks: [
        {
            text: 'home'
        },
        {
            text: 'features +'
        },
        {
            text: 'achievements'
        },
        {
            text: 'blog +'
        },
        {
            text: 'contact'
        }
    ],

    footInfo: [
        {
            info_name: 'Phone Number',
            info_cont: '+88012345678912'
        },
        {
            info_name: 'Email',
            info_cont: 'youremail@gmail.com'
        },
        {
            info_name: 'Address',
            info_cont: '30 North West New York 240'
        }
    ],

    footJackpots:[
        {
            
            type: 'free',
            money: '$ 230',
        },
        {
            
            type: 'club',
            money: '$ 290',
        },
        {
        
            type: 'royal',
            money: '$ 330',
        }
    ],

    

});