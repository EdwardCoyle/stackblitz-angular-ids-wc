import { TestBed } from '@angular/core/testing';
import { NotificationBadgeComponent } from './notification-badge.component';
describe('NotificationBadgeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NotificationBadgeComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(NotificationBadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=notification-badge.component.spec.js.map