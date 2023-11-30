import { TestBed } from '@angular/core/testing';
import { IdsMultiselectComponent } from './ids-multiselect.component';
describe('IdsMultiselectComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsMultiselectComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsMultiselectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-multiselect.component.spec.js.map