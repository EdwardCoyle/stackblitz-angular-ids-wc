import { TestBed } from '@angular/core/testing';
import { OverflowedComponent } from './overflowed.component';
describe('OverflowedComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OverflowedComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OverflowedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=overflowed.component.spec.js.map