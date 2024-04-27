class Notification {
    constructor(notificationId,createdTime,content,receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class EmailNotification extends Notification {
    constructor(notificationId,createdTime,content,receiver) {
        super(notificationId,createdTime,content,receiver);
    }
}

class SMSNotification extends Notification {
    constructor(notificationId,createdTime,content,phoneNumber) {
        super(notificationId,createdTime,content)
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