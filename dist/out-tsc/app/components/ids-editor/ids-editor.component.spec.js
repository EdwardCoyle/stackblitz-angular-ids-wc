import { TestBed } from '@angular/core/testing';
import { IdsEditorComponent } from './ids-editor.component';
describe('IdsEditorComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsEditorComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-editor.component.spec.js.map