import { TestBed } from '@angular/core/testing';
import { IdsLookupComponent } from './ids-lookup.component';
describe('IdsLookupComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsLookupComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsLookupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-lookup.component.spec.js.map