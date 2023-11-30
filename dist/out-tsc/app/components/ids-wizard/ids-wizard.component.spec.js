import { TestBed } from '@angular/core/testing';
import { IdsWizardComponent } from './ids-wizard.component';
describe('IdsWizardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsWizardComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsWizardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-wizard.component.spec.js.map