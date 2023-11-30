import { TestBed } from '@angular/core/testing';
import { IdsNotificationBannerComponent } from './ids-notification-banner.component';
describe('IdsNotificationBannerComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsNotificationBannerComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsNotificationBannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-notification-banner.component.spec.js.map