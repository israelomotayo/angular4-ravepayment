import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
var RavepaymentComponent = /** @class */ (function () {
    function RavepaymentComponent() {
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
    }
    RavepaymentComponent.prototype.ngOnInit = function () { };
    RavepaymentComponent.prototype.madePayment = function () {
        this.prepRaveOptions();
        window.getpaidSetup(this.raveOptions);
    };
    RavepaymentComponent.prototype.prepRaveOptions = function () {
        var _this = this;
        this.raveOptions = {
            PBFPubKey: this.key,
            txref: this.reference,
            amount: this.amount,
            customer_email: this.email,
            onclose: function () { return _this.close.emit(); },
            callback: function (response) { return _this.callback.emit(response); },
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
    return RavepaymentComponent;
}());
export { RavepaymentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF2ZXBheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjQtcmF2ZXBheW1lbnQvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvcmF2ZXBheW1lbnQvcmF2ZXBheW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBZ0M3RTtJQXlCSTtRQXJCVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN0QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQW9CdEIsQ0FBQztJQUNoQix1Q0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLDBDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUMxQixPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQWpCLENBQWlCO1lBQ2hDLFFBQVEsRUFBRSxVQUFDLFFBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBNUIsQ0FBNEI7WUFDNUQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSztZQUNoQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJO1lBQzdCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxFQUFFO1lBQ2pELGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxFQUFFO1lBQy9DLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUU7WUFDekMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRTtZQUNyQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLElBQUksRUFBRTtZQUNqRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFO1lBQ25DLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUU7WUFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtTQUN4QixDQUFDO0lBQ04sQ0FBQztJQW5EUTtRQUFSLEtBQUssRUFBRTtzREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFO3VEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7MkRBQW1CO0lBQ2pCO1FBQVQsTUFBTSxFQUFFOzBEQUF1QztJQUN0QztRQUFULE1BQU0sRUFBRTt1REFBNEI7SUFDNUI7UUFBUixLQUFLLEVBQUU7cURBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTt1REFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFO3dEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOzJEQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTtzREFBVztJQUNWO1FBQVIsS0FBSyxFQUFFOzBEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTt5REFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7b0VBQTRCO0lBQzNCO1FBQVIsS0FBSyxFQUFFO21FQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTtnRUFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7OERBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFO29FQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTs2REFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7OERBQXNCO0lBbkJyQixvQkFBb0I7UUFOaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixnTEFBMkM7O1NBRTVDLENBQUM7T0FFVyxvQkFBb0IsQ0FxRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXJEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgSVJhdmVPcHRpb25zIHtcbiAgICBQQkZQdWJLZXk6IHN0cmluZztcbiAgICB0eHJlZjogc3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIGN1c3RvbWVyX2VtYWlsOiBzdHJpbmc7XG4gICAgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XG4gICAgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcbiAgICBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xuICAgIGN1c3RvbV90aXRsZTogc3RyaW5nO1xuICAgIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGN1c3RvbV9sb2dvOiBzdHJpbmc7XG4gICAgcmVkaXJlY3RfdXJsOiBzdHJpbmc7XG4gICAgbWV0YSA/OiBhbnk7XG4gICAgY2FsbGJhY2s6IChyZXNwb25zZTogb2JqZWN0KSA9PiB2b2lkO1xuICAgIG9uY2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gICAgZ2V0cGFpZFNldHVwOiAob3B0aW9uczogSVJhdmVPcHRpb25zKSA9PiB2b2lkO1xufVxuZGVjbGFyZSBsZXQgd2luZG93OiBNeVdpbmRvd1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmF2ZS1wYXktYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdmVwYXltZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmF2ZXBheW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUmF2ZXBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBzdHlsZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSBjYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuICAgIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSBrZXk6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbWFpbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFtb3VudDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHJlZmVyZW5jZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1ldGE6IGFueTtcbiAgICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgICBASW5wdXQoKSBjdXN0b21lcl9maXJzdG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGN1c3RvbWVyX3Bob25lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tX2xvZ286IHN0cmluZztcbiAgICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcbiAgICBcblxuICAgIHByaXZhdGUgcmF2ZU9wdGlvbnM6IElSYXZlT3B0aW9ucztcblxuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIG5nT25Jbml0KCkge31cblxuICAgIG1hZGVQYXltZW50KCkge1xuICAgICAgICB0aGlzLnByZXBSYXZlT3B0aW9ucygpO1xuICAgICAgICB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIHByZXBSYXZlT3B0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yYXZlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIFBCRlB1YktleTogdGhpcy5rZXksXG4gICAgICAgICAgICB0eHJlZjogdGhpcy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50LFxuICAgICAgICAgICAgY3VzdG9tZXJfZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBvbmNsb3NlOiAoKSA9PiB0aGlzLmNsb3NlLmVtaXQoKSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IG9iamVjdCkgPT4gdGhpcy5jYWxsYmFjay5lbWl0KHJlc3BvbnNlKSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5IHx8ICdOR04nLFxuICAgICAgICAgICAgY291bnRyeTogdGhpcy5jb3VudHJ5IHx8ICdORycsXG4gICAgICAgICAgICBjdXN0b21lcl9maXJzdG5hbWU6IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lIHx8ICcnLFxuICAgICAgICAgICAgY3VzdG9tZXJfbGFzdG5hbWU6IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgfHwgJycsXG4gICAgICAgICAgICBjdXN0b21lcl9waG9uZTogdGhpcy5jdXN0b21lcl9waG9uZSB8fCAnJyxcbiAgICAgICAgICAgIGN1c3RvbV90aXRsZTogdGhpcy5jdXN0b21fdGl0bGUgfHwgJycsXG4gICAgICAgICAgICBjdXN0b21fZGVzY3JpcHRpb246IHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgICAgICAgY3VzdG9tX2xvZ286IHRoaXMuY3VzdG9tX2xvZ28gfHwgJycsXG4gICAgICAgICAgICByZWRpcmVjdF91cmw6IHRoaXMucmVkaXJlY3RfdXJsIHx8ICcnLFxuICAgICAgICAgICAgbWV0YTogdGhpcy5tZXRhIHx8IHt9XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19