import { TestBed } from '@angular/core/testing';
import { IdsDataLabelComponent } from './ids-data-label.component';
describe('IdsDataLabelComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsDataLabelComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsDataLabelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-data-label.component.spec.js.map