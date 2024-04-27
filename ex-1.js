class EmailNotification {
    constructor(notificationID,createdTime,content,receiver) {
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver} `)
    }
}

class SMSNotification {
    constructor(notificationID,createdTime,content,phoneNumber) {
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}
const palamheeEmail = new EmailNotification("palamhee1234",19.19,"Hello, world!","palarat.pj@gmail.com");
const palamheeSMS = new SMSNotification("palamhee1234",19.19,"Hello, world!","0291297504");
palamheeEmail.send();
palamheeSMS.send();