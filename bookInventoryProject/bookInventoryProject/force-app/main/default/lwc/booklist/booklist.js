import { LightningElement, wire } from 'lwc';
import getBooksList from '@salesforce/apex/BookController.getBooksList';

export default class BookList extends LightningElement {
    books;
    error;

    columns = [
        { label: 'Title', fieldName: 'Name' },
        { label: 'Author', fieldName: 'Author__c' },
        { label: 'Genre', fieldName: 'Genre__c' },
        { label: 'Price', fieldName: 'Price__c', type: 'currency' },
        { label: 'Published Date', fieldName: 'Published_Date__c', type: 'date' },
        { label: 'ISBN', fieldName: 'ISBN__c' }
    ];

    @wire(getBooksList)
    wiredBooks({ data, error }) {
        if (data) {
            this.books = data;
        } else if (error) {
            this.error = error.body.message;
        }
    }
}
