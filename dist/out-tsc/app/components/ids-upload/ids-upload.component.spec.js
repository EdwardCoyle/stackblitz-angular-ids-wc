import { TestBed } from '@angular/core/testing';
import { IdsUploadComponent } from './ids-upload.component';
describe('IdsUploadComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsUploadComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-upload.component.spec.js.map