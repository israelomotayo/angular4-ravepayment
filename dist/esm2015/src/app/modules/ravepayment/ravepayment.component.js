import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let RavepaymentComponent = class RavepaymentComponent {
    constructor() {
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
    }
    ngOnInit() { }
    madePayment() {
        this.prepRaveOptions();
        window.getpaidSetup(this.raveOptions);
    }
    prepRaveOptions() {
        this.raveOptions = {
            PBFPubKey: this.key,
            txref: this.reference,
            amount: this.amount,
            customer_email: this.email,
            onclose: () => this.close.emit(),
            callback: (response) => this.callback.emit(response),
            currency: this.currency || 'NGN',
            country: this.country || 'NG',
            customer_firstname: this.customer_firstname || '',
            customer_lastname: this.customer_lastname || '',
            customer_phone: this.customer_phone || '',
            custom_title: this.custom_title || '',
            custom_description: this.custom_description || '',
            custom_logo: this.custom_logo || '',
            redirect_url: this.redirect_url || '',
            meta: this.meta || {}
        };
    }
};
__decorate([
    Input()
], RavepaymentComponent.prototype, "text", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "style", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "className", void 0);
__decorate([
    Output()
], RavepaymentComponent.prototype, "callback", void 0);
__decorate([
    Output()
], RavepaymentComponent.prototype, "close", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "key", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "email", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "amount", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "reference", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "meta", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "currency", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "country", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "customer_firstname", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "customer_lastname", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "customer_phone", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "custom_title", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "custom_description", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "custom_logo", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "redirect_url", void 0);
RavepaymentComponent = __decorate([
    Component({
        selector: 'app-rave-pay-button',
        template: "<button\n    class=\"rave-pay-button\"\n    [ngStyle]=\"style\"\n    [ngClass]=\"className\"\n    (click)=\"madePayment()\">\n        {{text || 'Pay'}}\n</button>\n",
        styles: ["h1{color:red}"]
    })
], RavepaymentComponent);
export { RavepaymentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF2ZXBheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjQtcmF2ZXBheW1lbnQvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvcmF2ZXBheW1lbnQvcmF2ZXBheW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBZ0M3RSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQXlCN0I7UUFyQlUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFvQnRCLENBQUM7SUFDaEIsUUFBUSxLQUFJLENBQUM7SUFFYixXQUFXO1FBQ1AsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUMxQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDaEMsUUFBUSxFQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzVELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUs7WUFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTtZQUM3QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLElBQUksRUFBRTtZQUNqRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRTtZQUMvQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFO1lBQ3pDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUU7WUFDckMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixJQUFJLEVBQUU7WUFDakQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtZQUNuQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFO1lBQ3JDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7U0FDeEIsQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBcERZO0lBQVIsS0FBSyxFQUFFO2tEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7bURBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTt1REFBbUI7QUFDakI7SUFBVCxNQUFNLEVBQUU7c0RBQXVDO0FBQ3RDO0lBQVQsTUFBTSxFQUFFO21EQUE0QjtBQUM1QjtJQUFSLEtBQUssRUFBRTtpREFBYTtBQUNaO0lBQVIsS0FBSyxFQUFFO21EQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7b0RBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7dURBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFO2tEQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7c0RBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3FEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTtnRUFBNEI7QUFDM0I7SUFBUixLQUFLLEVBQUU7K0RBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFOzREQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTswREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7Z0VBQTRCO0FBQzNCO0lBQVIsS0FBSyxFQUFFO3lEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTswREFBc0I7QUFuQnJCLG9CQUFvQjtJQU5oQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLGdMQUEyQzs7S0FFNUMsQ0FBQztHQUVXLG9CQUFvQixDQXFEaEM7U0FyRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIElSYXZlT3B0aW9ucyB7XG4gICAgUEJGUHViS2V5OiBzdHJpbmc7XG4gICAgdHhyZWY6IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjdXN0b21lcl9lbWFpbDogc3RyaW5nO1xuICAgIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xuICAgIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XG4gICAgY3VzdG9tZXJfcGhvbmU6IHN0cmluZztcbiAgICBjdXN0b21fdGl0bGU6IHN0cmluZztcbiAgICBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBjdXN0b21fbG9nbzogc3RyaW5nO1xuICAgIHJlZGlyZWN0X3VybDogc3RyaW5nO1xuICAgIG1ldGEgPzogYW55O1xuICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IG9iamVjdCkgPT4gdm9pZDtcbiAgICBvbmNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICAgIGdldHBhaWRTZXR1cDogKG9wdGlvbnM6IElSYXZlT3B0aW9ucykgPT4gdm9pZDtcbn1cbmRlY2xhcmUgbGV0IHdpbmRvdzogTXlXaW5kb3dcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJhdmUtcGF5LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXZlcGF5bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhdmVwYXltZW50LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFJhdmVwYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3R5bGU6IG9iamVjdDtcbiAgICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgICBAT3V0cHV0KCkgY2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcbiAgICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KCkga2V5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW1haWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBhbW91bnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSByZWZlcmVuY2U6IHN0cmluZztcbiAgICBASW5wdXQoKSBtZXRhOiBhbnk7XG4gICAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGN1c3RvbV90aXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGN1c3RvbV9sb2dvOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcmVkaXJlY3RfdXJsOiBzdHJpbmc7XG4gICAgXG5cbiAgICBwcml2YXRlIHJhdmVPcHRpb25zOiBJUmF2ZU9wdGlvbnM7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICBuZ09uSW5pdCgpIHt9XG5cbiAgICBtYWRlUGF5bWVudCgpIHtcbiAgICAgICAgdGhpcy5wcmVwUmF2ZU9wdGlvbnMoKTtcbiAgICAgICAgd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLnJhdmVPcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcmVwUmF2ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmF2ZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBQQkZQdWJLZXk6IHRoaXMua2V5LFxuICAgICAgICAgICAgdHhyZWY6IHRoaXMucmVmZXJlbmNlLFxuICAgICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCxcbiAgICAgICAgICAgIGN1c3RvbWVyX2VtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgb25jbG9zZTogKCkgPT4gdGhpcy5jbG9zZS5lbWl0KCksXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBvYmplY3QpID0+IHRoaXMuY2FsbGJhY2suZW1pdChyZXNwb25zZSksXG4gICAgICAgICAgICBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSB8fCAnTkdOJyxcbiAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyeSB8fCAnTkcnLFxuICAgICAgICAgICAgY3VzdG9tZXJfZmlyc3RuYW1lOiB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSB8fCAnJyxcbiAgICAgICAgICAgIGN1c3RvbWVyX2xhc3RuYW1lOiB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lIHx8ICcnLFxuICAgICAgICAgICAgY3VzdG9tZXJfcGhvbmU6IHRoaXMuY3VzdG9tZXJfcGhvbmUgfHwgJycsXG4gICAgICAgICAgICBjdXN0b21fdGl0bGU6IHRoaXMuY3VzdG9tX3RpdGxlIHx8ICcnLFxuICAgICAgICAgICAgY3VzdG9tX2Rlc2NyaXB0aW9uOiB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiB8fCAnJyxcbiAgICAgICAgICAgIGN1c3RvbV9sb2dvOiB0aGlzLmN1c3RvbV9sb2dvIHx8ICcnLFxuICAgICAgICAgICAgcmVkaXJlY3RfdXJsOiB0aGlzLnJlZGlyZWN0X3VybCB8fCAnJyxcbiAgICAgICAgICAgIG1ldGE6IHRoaXMubWV0YSB8fCB7fVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==