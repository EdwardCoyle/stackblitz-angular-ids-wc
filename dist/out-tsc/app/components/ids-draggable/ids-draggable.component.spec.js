import { TestBed } from '@angular/core/testing';
import { IdsDraggableComponent } from './ids-draggable.component';
describe('IdsDraggableComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsDraggableComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsDraggableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-draggable.component.spec.js.map