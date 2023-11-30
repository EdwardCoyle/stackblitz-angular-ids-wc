import { TestBed } from '@angular/core/testing';
import { RangeComponent } from './range.component';
describe('RangeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RangeComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(RangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=range.component.spec.js.map