import { TestBed } from '@angular/core/testing';
import { SelectableSingleComponent } from './selectable-single.component';
describe('SelectableSingleComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SelectableSingleComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SelectableSingleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=selectable-single.component.spec.js.map