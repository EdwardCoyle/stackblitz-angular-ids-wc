import { TestBed } from '@angular/core/testing';
import { DemoListingComponent } from './demo-listing.component';
describe('DemoListingComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DemoListingComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(DemoListingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=demo-listing.component.spec.js.map