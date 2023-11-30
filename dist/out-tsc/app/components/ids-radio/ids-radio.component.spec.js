import { TestBed } from '@angular/core/testing';
import { IdsRadioComponent } from './ids-radio.component';
describe('IdsRadioComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsRadioComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsRadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-radio.component.spec.js.map