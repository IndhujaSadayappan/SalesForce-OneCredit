public with sharing class ReviewController {
    @AuraEnabled(cacheable=true)
    public static List<Review__c> getReviews(Id applicationId) {
        if (applicationId == null) {
            return new List<Review__c>();
        }
        return [
            SELECT Id, Reviewer_Name__c, Score__c, Status__c
            FROM Review__c
            WHERE Application__c = :applicationId
            ORDER BY CreatedDate DESC
        ];
    }
}
