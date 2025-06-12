import { LightningElement, api, wire } from 'lwc';
import getReviews from '@salesforce/apex/ReviewController.getReviews';

const COLUMNS = [
    { label: 'Reviewer Name', fieldName: 'Reviewer_Name__c', type: 'text' },
    { label: 'Score', fieldName: 'Score__c', type: 'number', typeAttributes: { minimumFractionDigits: 2, maximumFractionDigits: 2 } },
    { label: 'Status', fieldName: 'Status__c', type: 'text' }
];

export default class ReviewSummary extends LightningElement {
    @api recordId;

    columns = COLUMNS;

    @wire(getReviews, { applicationId: '$recordId' })
    reviews;
}
