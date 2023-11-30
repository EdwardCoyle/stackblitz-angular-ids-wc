import { TestBed } from '@angular/core/testing';
import { IdsInputComponent } from './ids-input.component';
describe('IdsInputComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsInputComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-input.component.spec.js.map