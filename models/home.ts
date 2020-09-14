/**
 * Home
 * @route / 
 * @description key information presented. Note: navigation and ctas do not need to be defined here
 */
interface Home {
    contactInfo: {
        email: string,
        social: {
            facebook: string,
            github: string,
            twitter: string,
            discord: string
        }
    },
    companyInfo: {
        number: number,
        address: string // TBC
    }
}