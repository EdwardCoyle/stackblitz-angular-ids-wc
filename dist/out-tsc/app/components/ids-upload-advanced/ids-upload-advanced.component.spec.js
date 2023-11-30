import { TestBed } from '@angular/core/testing';
import { IdsUploadAdvancedComponent } from './ids-upload-advanced.component';
describe('IdsUploadAdvancedComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsUploadAdvancedComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsUploadAdvancedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-upload-advanced.component.spec.js.map